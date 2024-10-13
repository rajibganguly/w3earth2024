import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBannerComponent } from './headBanner.component';

describe('SectiononeComponent', () => {
  let component: HeadBannerComponent;
  let fixture: ComponentFixture<HeadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
