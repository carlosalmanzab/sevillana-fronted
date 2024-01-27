import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideBarComponent } from "../side-bar/side-bar.component";

import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, SideBarComponent]
})
export class HomeComponent implements OnInit {

  private router = Inject(Router);


  ngOnInit(): void {
  }

}
