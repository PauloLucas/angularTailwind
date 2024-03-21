import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrl: './moments-form.component.css'
})
export class MomentsFormComponent {
  @Input() btnText!: string;

  send():void {
    console.log('clicou');
  }

}
