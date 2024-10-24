import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  currentInput: string = '';
  currentOperation: string = '';
  result: string = '';

  appendNumber(number: string) {
    this.currentInput += number;
  }

  chooseOperation(operation: string) {
    if (this.currentInput !== '') {
      this.currentOperation = operation;
      this.currentInput += operation;
    }
  }

  computeResult() {
    try {
      this.result = eval(this.currentInput);
      this.currentInput = this.result;
    } catch (error) {
      this.result = 'Error';
    }
  }

  appendDecimal() {
    if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
    }
  }

  clear() {
    this.currentInput = '';
    this.currentOperation = '';
    this.result = '';
  }

}