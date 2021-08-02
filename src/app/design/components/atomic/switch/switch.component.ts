import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() textYes: string;
  @Input() textNo: string;
  @Output() onChange = new EventEmitter<string>();
  defaultChoice: boolean = true;
  choice: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  switched(value) {
    this.onChange.emit(value);
  }


}
