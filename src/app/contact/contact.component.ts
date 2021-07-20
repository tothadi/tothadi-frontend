import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message, MessageService } from '../message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit, OnDestroy {

  subjects = ['Prices', 'Job opportunity', 'Other'];

  email!: Message;
  sent_1 = 'Sending message...';
  sent_2 = 'Message succesfuly sent!';
  sent_3 = 'Please try again!';
  status = 1;

  sent: string = '';

  submitted = false;

  constructor(private messageService: MessageService) {

  }

  sendMessage() {
    this.messageService.sendMessage(this.email).subscribe($status => {
      if ($status) {
        setTimeout(() => {
          this.sent = this.sent_2;
          this.status = 2;
        }, 2000);
        setTimeout(() => {
          this.submitted = false;
          this.status = 1;
        }, 5000);
      } else {
        setTimeout(() => {
          this.sent = this.sent_3;
          this.status = 3;
        }, 2000);
        setTimeout(() => {
          this.submitted = false;
          this.status = 1;
        }, 5000);
      }
    }, (err) => {
      console.error(err)
    });
    this.email = {
      name: '',
      address: '',
      subject: '',
      message: '',
      copy: false
    };
    this.sent = this.sent_1;
    this.submitted = true;

  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

}
