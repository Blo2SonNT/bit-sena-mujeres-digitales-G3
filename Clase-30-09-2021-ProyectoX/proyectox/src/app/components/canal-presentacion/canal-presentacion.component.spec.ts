import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalPresentacionComponent } from './canal-presentacion.component';

describe('CanalPresentacionComponent', () => {
  let component: CanalPresentacionComponent;
  let fixture: ComponentFixture<CanalPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalPresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
