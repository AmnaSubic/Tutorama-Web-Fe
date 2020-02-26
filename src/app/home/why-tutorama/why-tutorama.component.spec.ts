import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTutoramaComponent } from './why-tutorama.component';

describe('WhyTutoramaComponent', () => {
  let component: WhyTutoramaComponent;
  let fixture: ComponentFixture<WhyTutoramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyTutoramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTutoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
