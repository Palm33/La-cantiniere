import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuCantiniereService } from '../../services/menu-cantiniere.service';
@Component({
  selector: 'app-cantiniere-menu',
  templateUrl: './cantiniere-menu.component.html',
  styleUrls: ['./cantiniere-menu.component.css']
})
export class CantiniereMenuComponent implements OnInit {

  // Pour afficher l'onglet Formules (menu) par défaut
 viewMode = 'tabToday';
 // TODO : Récupere le numéro de la semaine actuelle
 weekNumber = 49;
 listMenuThisWeek: Array<Menu>;
 listMenuToday: Array<Menu>;
  constructor(private menuCantiniereService: MenuCantiniereService) { }

  ngOnInit() {
    this.getAllMenuForWeek();
    // this.getAllMenuForToday();
  }

  
 getAllMenuForWeek() {
  this.menuCantiniereService.getAllMenuForWeek(this.weekNumber)
    .subscribe(
      (response) => {
        this.listMenuThisWeek = response;
        console.log('listMenuThisWeek: ', this.listMenuThisWeek);
      },
      (error) => {
        console.log('Error in Menu.ts ... getAllMenuForWeek()', error);
      }
    );
}

}
