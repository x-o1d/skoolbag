import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'

import { SchoolsService } from './schools.service';

describe('SchoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SchoolsService]
  }));

  it('should be created', () => {
    const service: SchoolsService = TestBed.get(SchoolsService);
    expect(service).toBeTruthy();
  });
});
