import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imgArr: any[]): string {
    if(!imgArr) return 'assets/img/noimage.png'

    if(imgArr.length > 0) {
      return imgArr[0].url
    } else {
      return 'assets/img/noimage.png'
    }
  }

}
