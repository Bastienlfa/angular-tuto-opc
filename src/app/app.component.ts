import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { resolve } from 'url';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  
}
