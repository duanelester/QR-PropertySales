import { Component, OnInit } from '@angular/core';
import { House } from '../domain/house';
import { HouseService } from '../services/house.service';
declare var $: any;

@Component({
  selector: 'app-houseandlots',
  templateUrl: './houseandlots.component.html',
  styleUrls: ['./houseandlots.component.css']
})
export class HouseandlotsComponent implements OnInit {

  houses: House[];
  isHouse: Boolean = false;
  mapLink: string;

  constructor(private houseService: HouseService) {
    this.mapLink = 'https://www.google.com/maps/search/?api=1&query=';
  }

  ngOnInit() {
      this.getHouses();

      $('.dropify').dropify();

      // Used events
      const drEvent = $('#input-file-events').dropify();
      drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm('Do you really want to delete \"' + element.file.name + '\" ?');
      });
      drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
      });
      drEvent.on('dropify.errors', function (event, element) {
        console.log('Has Errors');
      });
      let drDestroy = $('#input-file-to-destroy').dropify();
      drDestroy = drDestroy.data('dropify');
      $('#toggleDropify').on('click', function (e) {
        e.preventDefault();
        if (drDestroy.isDropified()) {
          drDestroy.destroy();
        } else {
          drDestroy.init();
        }
      });

      $('#wizard').steps({});
    }

    getHouses(): void {
      this.houses = this.houseService.getHouses();
    }

    toggleIsLots() {
      this.isHouse = false;
    }

    toggleIsHouse() {
      this.isHouse = true;
    }

    showMap() {
      this.mapLink = this.mapLink.concat('Blast Asia');
    }
}

