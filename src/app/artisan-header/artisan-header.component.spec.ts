import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanHeaderComponent } from './artisan-header.component';

describe('ArtisanHeaderComponent', () => {
  let component: ArtisanHeaderComponent;
  let fixture: ComponentFixture<ArtisanHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
