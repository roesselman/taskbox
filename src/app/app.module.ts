import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { environment } from './../environments/environment';
import { NgxsModule } from '@ngxs/store';
import { TaskModule } from './components/task.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';


@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
