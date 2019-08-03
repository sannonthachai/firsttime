// Module =========================================================================================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component ======================================================================================
import { AppComponent } from './app.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { UpdateUserDataComponent } from './update-user-data/update-user-data.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserDataComponent,
    InputUserDataFormComponent,
    UpdateUserDataComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
