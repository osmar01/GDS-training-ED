import { CategoryEditInsertComponent } from './pages/category/category-edit-insert/category-edit-insert.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { AuthGuard } from './guards/auth-guard';
import { DeviceEditInsertComponent } from './pages/device/device-edit-insert/device-edit-insert.component';
import { DeviceListComponent } from './pages/device/device-list/device-list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'device', component: DeviceListComponent },
  { path: 'device-create', component: DeviceEditInsertComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category-create', component: CategoryEditInsertComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
