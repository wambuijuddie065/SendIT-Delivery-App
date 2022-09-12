import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject=new Subject<string>()
  search$=this.subject.asObservable()
  search(txt:string){
    this.subject.next(txt)
  }

  constructor() { }
}
