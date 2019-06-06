import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthentificationService } from './../../services/authentification.service';
import { InscriptionComponent } from './../inscription/inscription.component';
import { ConnexionComponent } from './../connexion/connexion.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Attribut connécté au service
  isAuth: boolean;
  userConnected: any;

  constructor(
    private modalService: NgbModal,
    private auth: AuthentificationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isLogged()) {
      this.isAuth = true;
      this.userConnected = JSON.parse(localStorage.getItem('cantiniere.user'));
      console.log('userConnected : ' + JSON.stringify(this.userConnected));
    } else {
      this.isAuth = false;
    }
    console.log('user connecté (isAuth) : ' + this.isAuth);
  }

  openconnection() {
    const modalRef = this.modalService.open(ConnexionComponent, { centered: true, windowClass: 'modalConnection' });
    this.ngOnInit();
  }
  openInscription() {
    const modalRef = this.modalService.open(InscriptionComponent, { centered: true, windowClass: 'modalInscription' });
  }

  deconnexion() {
    localStorage.clear();
    this.auth.logout();
    // this.router.navigated = false;
    this.router.navigate(['/']);
    // window.location.reload();
    this.ngOnInit();

    // this.snackBar.open('A Bientôt', 'Deconnexion', {
    //   duration: 8000,
    //   horizontalPosition: 'left'
    // });
  }

}
