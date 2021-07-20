import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
    name: String,
    address: String,
    subject: String,
    message: String,
    copy: Boolean
}

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    constructor(private http: HttpClient) { }

    public sendMessage(message: Message): Observable<Boolean> {
        return this.http.post<Boolean>('api/message', message);
    }
}
