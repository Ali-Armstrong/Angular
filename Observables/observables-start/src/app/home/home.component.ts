import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count=>{
    //   console.log(count)
    // })

    const customObservable = Observable.create(observer=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count > 3){
          observer.error(new Error('Count is greater than 3!'));
        }
        else if(count == 3){
          observer.complete();
        }
        count++;
      },1000)
    });

    this.firstSubscription = customObservable.subscribe(data=>{
      console.log(data)
    }, err=>{
      console.log(err.message)
    }, ()=>{
      console.log('Observable completed...')
    })
  }

  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }

}
