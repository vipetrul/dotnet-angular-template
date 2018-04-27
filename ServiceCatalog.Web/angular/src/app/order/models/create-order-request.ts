export class CreateOrderRequest {
  constructor(public description: string) {}

  validate(): string {
    if (this.description.length > 100) {
      return 'Order Description should be less than 100 characters';
    }
    return null;
  }
}
