import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPurezaComponent } from './test-pureza.component';

describe('TestPurezaComponent', () => {
  let component: TestPurezaComponent;
  let fixture: ComponentFixture<TestPurezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPurezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPurezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
