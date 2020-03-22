import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
    public data: Object[] =[
                  { x: '2014', y: 111.1 },
                  { x: '2015', y: 127.3 },
                  { x: '2016', y: 143.4 },
                  { x: '2017', y: 159.9 }];
    public data1: Object[] =[
                  { x: '2014', y: 76.9 },
                  { x: '2015', y: 99.5 },
                  { x: '2016', y: 121.7 },
                  { x: '2017', y: 142.5 }];
  
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
      valueType: 'Category',
      
  };

}
