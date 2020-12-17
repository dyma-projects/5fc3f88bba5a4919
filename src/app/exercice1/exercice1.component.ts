import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  private withoutProblemText: string = 'je n\'aime pas que la souris me passe dessus.';
  private withoutProblemColor: string = 'black';
  private withProblemText: string = 'Non ! part de là ! va voir ailleurs si j\'y suis';
  private withProblemColor: string = 'red';

  public phobicOfMiceText: string = this.withoutProblemText;
  public phobicOfMiceColor: string = this.withoutProblemColor;
  
  constructor() { }

  public problem(theAreAProblem: boolean): void {
    if (theAreAProblem) {
      this.phobicOfMiceText = this.withProblemText;
      this.phobicOfMiceColor = this.withProblemColor;
    } else {
      this.phobicOfMiceText = this.withoutProblemText;
      this.phobicOfMiceColor = this.withoutProblemColor;
    }
  }

  ngOnInit(): void {
  }

}
