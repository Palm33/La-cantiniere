import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.css"]
})
export class UserAccountComponent implements OnInit {
  public searchText: string;
  public users: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstname: "Kevin",
        lastname: "Croquette",
        email: "kevincroquette@gmail.com"
      },
      {
        firstname: "Jean",
        lastname: "Choucroute",
        email: "jeanchoucroute@gmail.com"
      }
    ];
  }
}
