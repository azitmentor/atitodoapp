import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  items: any;
  displayedColumns: string[] = [
    'todotext',
    'impact',
    'priority',
    'plannedlength',
    'delete',
  ];
  constructor(private data: DataService) {}
  item: any = {};
  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.data.getdata().subscribe({
      next: (p) => {
        this.items = p;
      },
      error: (e) => console.error(e),
    });
  }

  save() {
    this.item.userid = 1234;
    this.data.savedata(this.item).subscribe((p) => this.refresh());
  }

  delete(id: number) {
    this.data.delete(id).subscribe((p) => this.refresh());
  }
}
