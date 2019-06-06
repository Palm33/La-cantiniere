import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../models/meal';
import { PlatCantiniereService } from 'src/app/services/plat-cantiniere.service';
@Component({
  selector: 'app-cantiniere-plat',
  templateUrl: './cantiniere-plat.component.html',
  styleUrls: ['./cantiniere-plat.component.css']
})
export class CantinierePlatComponent implements OnInit {
  
   // Pour afficher tous les plats par défaut
   viewMode = 'tabAll';
   weekNumber = 32;
   listPlatsWeek: Array<Meal>;

  constructor( private platCantiniereServices: PlatCantiniereService,
   
    private router: Router) { }

  ngOnInit() {
    this.getAllMealsForWeek();
  }

  getAllMealsForWeek() {
    this.platCantiniereServices.getAllMealsForWeek(this.weekNumber)
      .subscribe(
        (response) => {
          this.listPlatsWeek = response;
          console.log('listPlatsWeek: ', this.listPlatsWeek);
          //console.log(response)
        },
        (error) => {
         // this.openSnackBarError();
          console.log('Error in Plats.ts ... getAllMealsForWeek()', error);
        }
      );
  }

  // Méthode du modal, qui valide l'ajout du plat dans le panier
  closeValiderAjoutPanier() {
    // TODO closeValiderAjouterPanier
  }

}
