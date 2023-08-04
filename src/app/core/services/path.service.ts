import { Injectable } from "@angular/core";
import { LaunchData } from "../launchdata";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { map } from "rxjs";
import { Executable } from "../executable";

interface MessageData {
    message: string;
    time?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PathService {

    url = 'http://localhost:8000/';
    webSocketUrl = 'ws://localhost:8000/ws/12414';

    async getPaths(): Promise<Executable[]> {
        const data = await fetch(this.url + "path");
        return await data.json() ?? [];
    }

    async stopApp(id: number){
        const data = await fetch(this.url + "stopApp?id=" + id);
        return await data.json() ?? [];
    }

    async startApp(id: number) {
        const data = await fetch(this.url + "startApp?id=" + id);
        return await data.json() ?? [];
    }

    private socket$!: WebSocketSubject<any>;
    public receivedData: Executable[] = [];

    public connect(): void {
        if (!this.socket$ || this.socket$.closed) {
            this.socket$ = webSocket(this.webSocketUrl);

            this.socket$.subscribe((data: Executable[]) => {
                this.receivedData = data;
                debugger;
            });
        }
    }

    sendMessage(message: string) {
        this.socket$.next({ message });
    }

    close() {
        this.socket$.complete();
    }
    
}
