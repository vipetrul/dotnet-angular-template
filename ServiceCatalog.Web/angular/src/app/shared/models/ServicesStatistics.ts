import { ServiceCategory } from "./ServiceCategory";

export class ServicesStatistics{
    serviceCategoryCounts: ServiceCategoryCount[] = [];
}

class ServiceCategoryCount{
    category: ServiceCategory;
    count: number;
}

