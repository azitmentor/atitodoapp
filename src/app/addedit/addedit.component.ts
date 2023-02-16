import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss'],
})
export class AddeditComponent implements OnInit {
  id: number = 0;
  item: any = {};
  error1: boolean = false;
  saveInProgress = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != undefined && this.id > 0) {
        this.data.getitem(this.id).subscribe((p) => {
          this.item = p;
        });
      }
    });
  }

  save() {
    if (this.item.todotext !== undefined && this.item.todotext.length !== 0) {
      this.saveInProgress = true;
      this.error1 = false;
      this.data
        .savedata(this.item)
        .subscribe((p) => this.router.navigateByUrl('/'));
    }
    else {
      this.saveInProgress = false;
      this.error1 = true;
    }
  }

  cancel() {
    this.location.back();
  }
}
