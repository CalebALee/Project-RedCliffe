import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNAComponent } from './dna.component';

describe('DNAComponent', () => {
  let component: DNAComponent;
  let fixture: ComponentFixture<DNAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DNAComponent]
    });
    fixture = TestBed.createComponent(DNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
