import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss'],
})
export class AddeditComponent implements OnInit {
  id: number = 0;
  item: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id != undefined) {
        this.data.getitem(this.id).subscribe((p) => {
          this.item = p;
        });
      }
    });
  }

  save() {
    this.data
      .savedata(this.item)
      .subscribe((p) => this.router.navigateByUrl('/'));
  }
}