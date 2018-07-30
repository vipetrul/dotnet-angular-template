import { ServiceCategory } from "./ServiceCategory";

export class ServiceSearchResult {
    services: Service[] = [];
    totalCount: number = 0;
  }

class Service{
  name: string = '';
  description: string = '';
  serviceType: ServiceCategory = null
  tags: string[] = [];
  owner: string = null;
}