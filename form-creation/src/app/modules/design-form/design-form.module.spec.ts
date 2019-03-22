import { DesignFormModule } from './design-form.module';

describe('DesignFormModule', () => {
  let designFormModule: DesignFormModule;

  beforeEach(() => {
    designFormModule = new DesignFormModule();
  });

  it('should create an instance', () => {
    expect(designFormModule).toBeTruthy();
  });
});
