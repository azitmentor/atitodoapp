import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  confirm = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteClick() {
    this.confirm = true;
  }
}
