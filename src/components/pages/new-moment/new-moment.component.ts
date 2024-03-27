import { Component } from '@angular/core';
import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/moment.service';
import { formatDate } from '@angular/common';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar';

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService
  ) {}
  async createHandler(moment: Moment) {
    const formData = new FormData();
    console.log(moment);

    formData.append("title", moment.title);
    formData.append("description", moment.description);
    formData.append("image", moment.image);
    await this.momentService.creatMoment(formData).subscribe(
      () => {
        this.messageService.add("Momento " + moment.title + " adicionado com sucesso.")
      }
    );

  }


}
