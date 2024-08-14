import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenComponentComponent } from './template-driven-component.component';

describe('TemplateDrivenComponentComponent', () => {
  let component: TemplateDrivenComponentComponent;
  let fixture: ComponentFixture<TemplateDrivenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
