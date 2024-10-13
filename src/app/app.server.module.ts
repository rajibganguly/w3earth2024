import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AppModule,
    SharedModule,
    ServerModule,
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
