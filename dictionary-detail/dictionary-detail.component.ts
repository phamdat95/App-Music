 import { Component, OnInit } from '@angular/core';
 import {ActivatedRoute, ParamMap} from '@angular/router';
 import {DictionaryService} from '../dictionary.service';
 import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {
  meaning: string;
  key: string;
  sub: Subscription;
  constructor(private activatedRouter: ActivatedRoute,
              private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.key = paramMap.get('key');
      this.meaning = this.dictionaryService.search(this.key);
    });
  }

}
