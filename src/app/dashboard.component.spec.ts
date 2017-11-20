import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent (inline template)', () => {

  let comp:    DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(DashboardComponent);

    comp = fixture.componentInstance; // DashboardComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  // it('should display original title', () => {
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain(comp.heroes);
  // });

  // it('should display a different test title', () => {
  //   comp.heroes = 'Test Title';
  //   fixture.detectChanges();
  //   expect(el.textContent).toContain('Test Title');
  // });
});


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
