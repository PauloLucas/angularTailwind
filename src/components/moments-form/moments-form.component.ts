import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../../interfaces/Moment';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrl: './moments-form.component.css'
})
export class MomentsFormComponent implements OnInit{
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();

  momentForm!: FormGroup;

  ngOnInit(): void{
    this.momentForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(File, [Validators.required]),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }
  get image() {
    return this.momentForm.get('image')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }
  
  submit():void {
    this.onSubmit.emit(this.momentForm.value);
    this.momentForm.reset();
  }

}
