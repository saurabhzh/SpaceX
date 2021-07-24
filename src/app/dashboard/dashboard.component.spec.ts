import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ProgramService } from '../program.service';
import { of } from 'rxjs';

const mockProgramService = {
  getPrograms: () => { return of([{
    links: {mission_patch_small: 'sampleURL'},
    mission_id: [],
    rocket: {first_stage: {cores: [{landing_intent: true}]}}
  }]) }
};

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [{provide: ProgramService, useValue: mockProgramService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set year when a year is selecetd', () => {
    spyOn(component, 'getData');
    component.launchYear = NaN;
    component.selectYear(2011);
    expect(component.launchYear).toBe(2011);
    expect(component.getData).toHaveBeenCalled();
  });

  it('should reset a year when same year is selecetd', () => {
    spyOn(component, 'getData');
    component.launchYear = 2011;
    component.selectYear(2011);
    expect(isNaN(component.launchYear)).toBeTruthy();
    expect(component.getData).toHaveBeenCalled();
  });
});
