import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})

export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string;
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia = '';
  }
}
