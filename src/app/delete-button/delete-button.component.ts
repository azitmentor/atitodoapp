import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Input() item: any;
  @Output() deleted = new EventEmitter<any>();
  
  confirm = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteClick() {
    this.confirm = true;
    console.log(this.item);
  }

  confirmed() {
    this.confirm = false;
    this.deleted.emit(this.item);
  }
}
