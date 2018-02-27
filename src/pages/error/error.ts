import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'error',
  templateUrl: 'error.html'
})
export class ErrorComponent {
  error: string;

  constructor(params: NavParams) {
    this.error = params.get('error');
  }

}
