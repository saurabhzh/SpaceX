import { HttpClientModule } from '@angular/common/http';
import { TestBed, tick } from '@angular/core/testing';

import { ProgramService } from './program.service';

describe('ProgramService', () => {
  let service: ProgramService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProgramService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(ProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the base URL on page load', () => {
    service.baseUrl = 'BASE';
    service.getPrograms();
    expect(service).toBeDefined();
  });

  it('should call the base URL on page load', () => {
    service.baseUrl = 'BASE';
    service.getPrograms();
    expect(service.url).toBe(service.baseUrl);
  });

  it('should call the base URL with query params on selected filters', () => {
    service.baseUrl = 'BASE';
    service.getPrograms(2011, true, true);
    expect(service.url).toBe(`${service.baseUrl}&launch_success=true&land_success=true&launch_year=2011`);
  });
});
