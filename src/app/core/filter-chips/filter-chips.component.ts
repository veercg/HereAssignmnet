import { Component, OnInit, Input } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { FilterChip } from '../../interface/filter-chip.interface';

@Component({
  selector: 'app-filter-chips',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.css']
})
export class FilterChipsComponent implements OnInit {

  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  @Input()
  filters: FilterChip[];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.filters.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }
}
