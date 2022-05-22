import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let time, minutes, seconds, hours;

    let _hours = Math.floor(value / 3600);
    time = value - _hours * 3600;

    let _minutes = Math.floor(time / 60);

    let _seconds = value - _minutes * 60;

    if (_hours < 10) {
      hours = `0${_hours}`;
    } else {
      hours = _hours;
    }

    if (_minutes < 10) {
      minutes = `0${_minutes}`;
    } else {
      minutes = _minutes;
    }

    if (_seconds < 10) {
      seconds = `0${_seconds}`;
    } else {
      seconds = _seconds;
    }

    if (_hours > 0) {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }
}
