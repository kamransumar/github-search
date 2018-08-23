import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from './ui/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
