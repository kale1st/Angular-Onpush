import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports:[ChildComponent],
  template: `
    <h2>Parent Component</h2>
    <button (click)="increment()">Increment Counter</button>
    <button (click)="startTimer()">Start Timer (setTimeout)</button>
    <p>Counter: {{ counter }}</p>
    <p>Timer: {{ timer }}</p>
    <p>Parent debug: {{ debugOutput }}</p>
    <app-child [value]="counter"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  counter = 0;
  timer = 0;

  increment() {
    this.counter++;
  }

  startTimer() {
    setInterval(() => {
      this.timer++;
      console.log('Timer updated to:', this.timer);
    }, 1000);
  }

  get debugOutput() {
    console.log('Parent checked');
    return this.counter;
  }
}
