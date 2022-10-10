import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  items: any[] = [];
  search: string = '';
  tags: string[] = [];
  selectedtags: string[] = [];
  displayedColumns: string[] = [
    'addedit',
    'todotext',
    'tags',
    'impact',
    'priority',
    'length',
    'power',
    'delete',
  ];
  constructor(private data: DataService) { }
  item: any = {};
  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.data.getdata(this.search, this.selectedtags).subscribe({
      next: (p) => {
        this.items = p;
      },
      error: (e) => console.error(e),
    });

    this.data.gettaglist().subscribe(t => this.tags = t);
  }

  delete(id: number) {
    this.data.delete(id).subscribe((p) => this.refresh());
  }

  removeTag(tag: string) {
    const index = this.selectedtags.indexOf(tag);
    if (index > -1) { // only splice array when item is found
      this.selectedtags.splice(index, 1); // 2nd parameter means remove one item only
      this.refresh();
    }
  }
}
