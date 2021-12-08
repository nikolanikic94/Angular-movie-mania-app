import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize: number;
  @Input() pageSize: number;
  page: number = 1;
  @Output() paginationEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updatePage(value: number) {
    this.page += value;
    this.paginationEmitter.emit({ page: this.page });
  }
}
