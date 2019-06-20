import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacytermsPage } from './privacyterms.page';

describe('PrivacytermsPage', () => {
  let component: PrivacytermsPage;
  let fixture: ComponentFixture<PrivacytermsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacytermsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacytermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
