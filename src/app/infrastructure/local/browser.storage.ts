import { Injectable } from "@angular/core";

@Injectable()
export class BrowserStorage{
    saveItem(key: string, value: string){
        sessionStorage.setItem(key, value)
    }

    getItem(key: string): String | null{
        return sessionStorage.getItem(key)
    }
}

