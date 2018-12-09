import { BackendProvider } from './../../providers/backend/backend';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from './../../providers/user/user';
import leaflet from "leaflet";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: leaflet.Map;
  mapIsLoaded: boolean = false;

  currentMarker: leaflet.Marker = null;
  currentCountryname: string = null;
  currentCountryLayer: leaflet.GeoJSON = null;

  currentGuess: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient,
              public api: BackendProvider,
              public alertCtrl: AlertController,
              public user: UserProvider) {}

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    if (!this.mapIsLoaded) {
      this.map = leaflet.map("map", {
        center: [20.0, 5.0],
        minZoom: 1,
        zoom: 3,
        maxZoom: 10,
      });
      leaflet.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo( this.map );
      this.refreshRandomCountry();
      this.mapIsLoaded = true;
    }
  }

  }

}
