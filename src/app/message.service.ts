import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
    name: String,
    address: String,
    subject: String,
    text: String,
    copy: Boolean
}

export interface MessageStatus {
    status: Boolean;
    message: string;
}

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    constructor(private http: HttpClient) { }

    public sendMessage(message: Message): Observable<MessageStatus> {
        return this.http.post<MessageStatus>('api/message', message);
    }
}
