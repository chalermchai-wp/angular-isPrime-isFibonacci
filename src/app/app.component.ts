import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  input;
  cal;
  result;

  ngOnInit(): void {
    this.cal = 'isPrime';
  }

  onInputNumber(input) {
    this.input = Math.round(input);
    if (input < 0) {
      this.input = 1;
    }

    this.changeCal(this.cal);
  }

  changeCal(cal) {
    if (cal === 'isPrime') {
      this.result = this.isPrime(this.input);
    }
    if (cal === 'isFibonacci') {
      this.result = this.isFibonacci(this.input);
    }
  }

  isPrime(number) {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  isSquare(x) {
    let s = Math.sqrt(x);
    return s * s == x;
  }

  isFibonacci(number) {
    if (
      this.isSquare(5 * (number * number) - 4) ||
      this.isSquare(5 * (number * number) + 4)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
