import { LandingRoutingModule } from './landing.routing.module';

describe('Landing.RoutingModule', () => {
  let landingRoutingModule: LandingRoutingModule;

  beforeEach(() => {
    landingRoutingModule = new LandingRoutingModule();
  });

  it('should create an instance', () => {
    expect(landingRoutingModule).toBeTruthy();
  });
});
