import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public auth : AuthService) {
  }



}
