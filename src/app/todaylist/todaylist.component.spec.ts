import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaylistComponent } from './todaylist.component';

describe('TodaylistComponent', () => {
  let component: TodaylistComponent;
  let fixture: ComponentFixture<TodaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
