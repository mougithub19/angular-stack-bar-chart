import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-ng-charts';
import { StackingBarSeries, CategoryService} from '@syncfusion/ej2-ng-charts';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  providers: [ StackingBarSeries, CategoryService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
