import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
      // Split the input string into an array of words
      const words = value.toLowerCase().split(' ');
    
      // Capitalize the first letter of each word
      const titleWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    
      // Join the capitalized words back together into a single string
      const titleString = titleWords.join(' ');
    
      return titleString;
    }
}
