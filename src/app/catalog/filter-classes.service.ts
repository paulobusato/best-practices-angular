import { Injectable } from "@angular/core";

@Injectable()
export class FilterClassesService {

  constructor() { }

  filterClasses(filter: string, classes: any) {
    if (!filter) {
      return classes;
    }

    if (filter === 'GEN') {
      return this.showOnlyGeneralCourses(classes);
    }

    return classes.filter((c: any) => c.course.courseNumber.startsWith(filter));
  }

  showOnlyGeneralCourses(classes: any): void {
    return classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
