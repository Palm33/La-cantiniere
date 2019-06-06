import { Menu } from './../../models/menu';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Pour afficher l'onglet Formules (menu) par défaut
  viewMode = 'tabToday';

  // Pour initialiser le numéro de la semaine
  weekNumber: number;
  dateWeek = new Date();
  yearStart: any;

  listMenuThisWeek: Array<Menu>;
  listMenuToday: Array<Menu>;

  constructor(private menuService: MenuService) { }

  // On initialise la vue en calculant le numéro de la semaine, et en récupérant tous les menu du jour et de la semaine
  ngOnInit() {
    this.getWeekNumber(this.dateWeek);
    this.getAllMenuForWeek();
    this.getAllMenuForToday();
  }

  getAllMenuForWeek() {
    this.menuService.getAllMenuForWeek(this.weekNumber)
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

  getAllMenuForToday() {
    this.menuService.getAllMenuForToday()
      .subscribe(
        (response) => {
          this.listMenuToday = response;
          console.log('listMenuToday: ', this.listMenuToday);
        },
        (error) => {
          console.log('Error in Menu.ts ... getAllMenuForToday()', error);
        }
      );
  }

  // Méthode pour récupérer le numéro de la semaine actuelle
  getWeekNumber(dateWeek) {
    dateWeek = new Date(Date.UTC(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate()));
    dateWeek.setUTCDate(dateWeek.getUTCDate() + 4 - (dateWeek.getUTCDay() || 7));
    this.yearStart = new Date(Date.UTC(dateWeek.getUTCFullYear(), 0, 1));
    this.weekNumber = Math.ceil((((dateWeek - this.yearStart) / 86400000) + 1) / 7);
    console.log('Date de la semaine : ' + dateWeek.getUTCFullYear(), this.weekNumber);

    return this.weekNumber;
  }

}
