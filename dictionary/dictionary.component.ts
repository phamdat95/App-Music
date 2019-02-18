import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  mean: String;
  word: String;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
  }
  search(word) {
    this.mean = this.dictionaryService.search(word);
    this.word = word;
  }
}
