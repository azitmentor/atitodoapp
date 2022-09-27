import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  items: any;
  search: string = '';
  displayedColumns: string[] = [
    'addedit',
    'todotext',
    'tags',
    'impact',
    'priority',
    'length',
    'delete',
  ];
  constructor(private data: DataService) {}
  item: any = {};
  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.data.getdata(this.search).subscribe({
      next: (p) => {
        this.items = p;
      },
      error: (e) => console.error(e),
    });
  }

  delete(id: number) {
    this.data.delete(id).subscribe((p) => this.refresh());
  }
}
