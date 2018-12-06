import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';

import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = SettingsPage;

  constructor() {

  }
}
