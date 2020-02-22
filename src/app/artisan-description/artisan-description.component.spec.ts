import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanDescriptionComponent } from './artisan-description.component';

describe('ArtisanDescriptionComponent', () => {
  let component: ArtisanDescriptionComponent;
  let fixture: ComponentFixture<ArtisanDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
