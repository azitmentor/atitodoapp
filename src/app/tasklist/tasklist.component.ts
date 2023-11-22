import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SearchParam } from '../models/searchparam';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  items: any[] = [];
  tags: string[] = [];
  searchparam: SearchParam = {};
  item: any = {};
  showfilter = false;
  loadError = false;
  isLoading = false;
  errorMessage = "";
  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    let src = localStorage.getItem("searchparam");
    if (src !== null && src != undefined) {
      this.searchparam = JSON.parse(src);
    }
    this.refresh();
  }

  refresh() {
    localStorage.setItem("searchparam", JSON.stringify(this.searchparam));
    this.loadError = false;
    this.isLoading = true;
    this.data.getdata(this.searchparam).subscribe({
      next: (p) => {
        this.isLoading = false;
        this.items = p;
      },
      error: (e) => {
        console.error(e);
        this.loadError = true;
        this.isLoading = false;
        this.errorMessage = e.message;
      },
    });

    this.data.gettaglist(this.searchparam).subscribe(t => this.tags = t);
  }

  resetSearch() {
    this.searchparam.text = '';
    this.searchparam.tags = [];
    this.searchparam.hidebelow = 0;
    this.searchparam.todayonly = false;
    this.searchparam.starredonly = false;
    this.refresh()
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

  delete(id: number) {
    this.data.delete(id).subscribe((p) => this.refresh());
  }

  done(id: number) {
    this.data.done(id).subscribe((p) => this.refresh());
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

  addFilterTag(tag: string) {
    this.searchparam.tags!.push(tag);
    const index = this.tags.indexOf(tag);
    if (index > -1) { // only splice array when item is found
      this.tags!.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.refresh()    
  }

  removeFilterTag(tag: string) {
    this.tags.push(tag);
    const index = this.searchparam.tags!.indexOf(tag);
    if (index > -1) { // only splice array when item is found
      this.searchparam.tags!.splice(index, 1); // 2nd parameter means remove one item only
      this.refresh();
    }
  }
}
