import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./item";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  apiURL: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {}

  public getData() {
    return this.httpClient.get<Item[]>(`${this.apiURL}`);
  }

  public getDataOne() {
    const id: number = Math.floor(Math.random() * 100) + 1;
    return this.httpClient.get<Item>(`${this.apiURL}/${id}`);
  }
}
