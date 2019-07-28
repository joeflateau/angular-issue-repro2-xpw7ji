export class ResponsiveConfig {
  constructor(
    public breakpoints: {
      [name: string]: {
        min: number;
        max: number;
      };
    }
  ) {}
}
