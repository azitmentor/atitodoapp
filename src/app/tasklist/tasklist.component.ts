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

  removeTag(tag: string) {
    const index = this.searchparam.tags!.indexOf(tag);
    if (index > -1) { // only splice array when item is found
      this.searchparam.tags!.splice(index, 1); // 2nd parameter means remove one item only
      this.refresh();
    }
  }
}
