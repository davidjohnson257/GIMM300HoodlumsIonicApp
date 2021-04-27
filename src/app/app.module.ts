import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { fromEventPattern } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCalendarModule} from 'ionic2-calendar';

import { CalModalPageModule } from './pages/cal-modal/cal-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  NgCalendarModule,
CalModalPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
