import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { SideBarComponent } from "./shared/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, SideBarComponent, RouterOutlet],
    styleUrl: './home.component.css',
    templateUrl: './home.component.html'
})
export class HomeComponent {

}
