import { Injectable } from '@angular/core';

export interface IWord {
  key: String;
  mean: String;
}
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordUnit: IWord[] = [{
    key: 'hello',
    mean: 'Xin chào'
  }, {
    key: 'good bye',
    mean: 'Tạm biệt'
  }];
  constructor() { }
  search (word: String): String {
    if (!word) {
      return '';
    }
    const v = this.wordUnit.find(words => words.key === word.toLowerCase());
    if (v) {
      return v.mean;
    } else {
      return 'Not found';
    }
  }
  getAll (): IWord[] {
    return this.wordUnit;
  }
}
