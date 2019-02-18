import {Injectable} from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class TimeLifeService {

  constructor() {
  }

  // Hàm này thực hiện từ năm đến tháng đến ngày
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
      // thêm số năm chênh vào diff. diff sẽ thay đổi năm thành năm hiện tại nhưng khác ngày tháng.
    }

    const months = differenceInMonths(now, diff);
    if (months > 0) {
      result.push(`${months} months`);
      diff = addMonths(diff, months);
      // thêm số năm chênh vào diff. diff sẽ thay đổi năm thành năm, tháng hiện tại nhưng khác ngày.
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
