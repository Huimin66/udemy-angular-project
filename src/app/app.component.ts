import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ['./app.component.scss']
  styles: [
    `
      h3 {
        color: pink;
      }
    `,
  ],
})
export class AppComponent {
  title = "udemy-angular-project"

  // exercise4 as following
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  onHandleInterval(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
    }
  }
}
