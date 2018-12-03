import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SbUiModule } from 'sb-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, SbUiModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
