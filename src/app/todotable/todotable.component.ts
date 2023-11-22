import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.scss']
})
export class TodotableComponent implements OnInit {

  @Input()
  items: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  done(id: number) {
    this.data.done(id).subscribe((p) => this.refresh());
  }

  delete(id: number) {
    this.data.delete(id).subscribe((p) => this.refresh());
  }

  today(id: number) {
    this.data.today(id).subscribe((p) => this.refresh());
  }

  star(id: number) {
    this.data.star(id).subscribe((p) => this.refresh());
  }

  archive(id: number) {
    this.data.archive(id).subscribe((p) => this.refresh());
  }

  sortpriority() {
    this.items = this.items.sort((a, b) => b.priority - a.priority);
  }

  sortvalue() {
    this.items = this.items.sort((a, b) => a.realvalue - b.realvalue);
  }

  sorttask() {
    this.items = this.items.sort((a, b) => {
      if (a.todotext > b.todotext) return 1;
      if (a.todotext < b.todotext) return -1;
      return 0;
    });
  }

  sortlength() {
    this.items = this.items.sort((a, b) => a.length - b.length);
  }

  refresh() {

  }
}
