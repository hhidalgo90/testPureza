import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTestPurezaComponent } from './inicio-test-pureza.component';

describe('InicioTestPurezaComponent', () => {
  let component: InicioTestPurezaComponent;
  let fixture: ComponentFixture<InicioTestPurezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTestPurezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioTestPurezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
