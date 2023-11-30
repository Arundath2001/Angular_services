import { TestBed } from '@angular/core/testing';
import { newtask } from './task.service';

describe('newtask', () => {
  let service: newtask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(newtask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
