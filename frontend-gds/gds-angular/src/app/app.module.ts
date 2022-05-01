import { ConfirmationService, MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// -- --------primeng
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
// -- ---------my components
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { DeviceEditInsertComponent } from './pages/device/device-edit-insert/device-edit-insert.component';
import { DeviceListComponent } from './pages/device/device-list/device-list.component';
import { CategoryEditInsertComponent } from './pages/category/category-edit-insert/category-edit-insert.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CategoryService } from './services/category.service';

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
    HttpClientModule,
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
    DividerModule,
    PanelModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    DropdownModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
