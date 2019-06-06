import { AuthentificationService } from "./../../services/authentification.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent implements OnInit {
  constructor(private auth: AuthentificationService) {}

  currentTime = new Date();
  hours = this.currentTime.getHours();
  minutes = this.currentTime.getMinutes();
  t = this.currentTime.getHours() + ':' + this.currentTime.getMinutes();

  isAuth: boolean;
  userConnected: any;

  ngOnInit() {
    if (this.auth.isLogged()) {
      this.isAuth = true;
      this.userConnected = JSON.parse(localStorage.getItem('cantiniere.user'));
      console.log('userConnected : ' + JSON.stringify(this.userConnected));
    } else {
      this.userConnected = '';
      this.isAuth = false;
    }
    console.log('user connecté (isAuth) : ' + this.isAuth);
  }
}
