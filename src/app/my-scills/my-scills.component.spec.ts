import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScillsComponent } from './my-scills.component';

describe('MyScillsComponent', () => {
  let component: MyScillsComponent;
  let fixture: ComponentFixture<MyScillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyScillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyScillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
