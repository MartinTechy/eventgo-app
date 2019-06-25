import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDetailPage } from './friend-detail.page';

describe('FriendDetailPage', () => {
  let component: FriendDetailPage;
  let fixture: ComponentFixture<FriendDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
