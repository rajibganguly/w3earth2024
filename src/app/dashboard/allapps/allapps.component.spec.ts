import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppsComponent } from './allapps.component';

describe('AllAppsComponent', () => {
  let component: AllAppsComponent;
  let fixture: ComponentFixture<AllAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
