import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WebRequestsService {
  readonly root_url;

  constructor(private http: HttpClient) {
    this.root_url = "http://localhost:3000/api";
  }

  get(uri: String) {
    return this.http.get(`${this.root_url}/${uri}`);
  }

  post(uri: String, payload: Object) {
    return this.http.post(`${this.root_url}/${uri}`, payload);
  }

  patch(uri: String, payload: Object) {
    return this.http.patch(`${this.root_url}/${uri}`, payload);
  }

  delete(uri: String) {
    return this.http.delete(`${this.root_url}/${uri}`);
  }
}
