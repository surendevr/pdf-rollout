import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGround } from './file-ground';

describe('FileGround', () => {
  let component: FileGround;
  let fixture: ComponentFixture<FileGround>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileGround],
    }).compileComponents();

    fixture = TestBed.createComponent(FileGround);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
