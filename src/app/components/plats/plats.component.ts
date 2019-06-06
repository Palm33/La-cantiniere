import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Meal } from '../../models/meal';
import { PlatService } from '../../services/plat.service';
import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
})
export class PlatsComponent implements OnInit {

  order: Order;

  // Pour afficher tous les plats par défaut
  viewMode = 'tabAll';
  weekNumber = 32;
  listPlatsWeek: Array<Meal>;

  // Pour les choix du modal d'ajout au panier
  theChoice = 'Simple';
  choices: string[] = ['Simple', 'Formule'];
  selectedQuantity = '1';

  // Pour les snackBar (messages de confirmation/erreur)
  @ViewChild('snackBarTemplateError')
  snackBarTemplateError: TemplateRef<any>;
  @ViewChild('snackBarTemplateAjoutPanier')
  snackBarTemplateAjoutPanier: TemplateRef<any>;

  constructor(
    private platServices: PlatService,
    private snackbar: MatSnackBar,
    private router: Router,
    private modalService: NgbModal,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.getAllMealsForWeek();
  }


  getAllMealsForWeek() {
    this.platServices.getAllMealsForWeek(this.weekNumber)
      .subscribe(
        (response) => {
          this.listPlatsWeek = response;
          console.log('listPlatsWeek: ', this.listPlatsWeek);
        },
        (error) => {
          this.openSnackBarError();
          console.log('Error in Plats.ts ... getAllMealsForWeek()', error);
        }
      );
  }

  // Méthode pour ouvrir le modal d'ajout de plat
  openAddModal(ajoutPanier: any) {
    this.modalService.open(ajoutPanier, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.closeModal();
      }, (reason) => {
        this.closeModal();
      });
  }

  // Méthode qui permet d'afficher un message d'erreur, en cas d'erreur
  openSnackBarError() {
    this.snackbar.openFromTemplate(this.snackBarTemplateError, {
      duration: 15000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  // Méthode qui permet d'afficher un message de confirmation d'ajout de plat dans le panier
  openSnackBarAjoutPanier() {
    this.snackbar.openFromTemplate(this.snackBarTemplateAjoutPanier, {
      duration: 10000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }

  // Méthode qui permet de fermer le modal
  closeModal() {
    this.modalService.dismissAll();
  }

  // Méthode du modal, qui valide l'ajout du plat dans le panier
  closeValiderAjoutPanier() {
    // TODO closeValiderAjouterPanier
  }

  // Méthode du bouton "+" de la card pour directement ajouter un plat dans le panier
  addToPanier() {
    // TODO addToPanier
    this.openSnackBarAjoutPanier();
  }

}
