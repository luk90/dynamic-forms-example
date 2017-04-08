import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessageService } from './error-message-service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key)) {
        return ErrorMessageService.getValidationMessage(key, this.control.errors[key]);
      }
    }
    return null;
  }

}
