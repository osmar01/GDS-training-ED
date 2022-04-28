import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { DeviceEditInsertComponent } from './pages/device/device-edit-insert/device-edit-insert.component';
import { DeviceListComponent } from './pages/device/device-list/device-list.component';
import { CategoryEditInsertComponent } from './pages/category/category-edit-insert/category-edit-insert.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    LoginComponent,
    DeviceEditInsertComponent,
    DeviceListComponent,
    CategoryEditInsertComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    MenuModule,
    ImageModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DividerModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
