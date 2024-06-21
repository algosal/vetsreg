import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCopyComponent } from './main-copy.component';

describe('MainCopyComponent', () => {
  let component: MainCopyComponent;
  let fixture: ComponentFixture<MainCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
