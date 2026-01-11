import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>Child received: {{ value }}</p>
    <p>Child debug: {{ debugOutput }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() value!: number;

  get debugOutput() {
    console.log('Child checked');
    return this.value;
  }
}
