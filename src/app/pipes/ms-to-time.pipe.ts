import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {

  transform(duration: number): string {
    let  seconds: number | string = Math.floor((duration / 1000) % 60);
    let  minutes: number | string = Math.floor((duration / (1000 * 60)) % 60);
  
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return minutes + ":" + seconds;
  }

}
