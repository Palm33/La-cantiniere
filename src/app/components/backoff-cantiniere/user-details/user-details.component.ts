import { Component, OnInit } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openSolder(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-solder" });
  }

  openCrediter(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-crediter" });
  }
}
