import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  sort: string;
  @Output() sortCriteriaEmitter = new EventEmitter();
  @Output() sortDirectionEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sortCriteria() {
    this.sortCriteriaEmitter.emit({ sort: this.sort });
  }

  sortDirection(value: string) {
    this.sortDirectionEmitter.emit({ sort: this.sort, sortDirection: value });
  }
}
