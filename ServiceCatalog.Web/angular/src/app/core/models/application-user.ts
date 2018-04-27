export class ApplicationUser {
  /**
   * Application User View Model.
   */
  constructor(
    public hawkId: string = '',
    public originalUser?: string | null
  ) {}

  isAuthenticated(): boolean {
    return !!this.hawkId;
  }

  isAdmin(): boolean {
    return false;
  }
}
