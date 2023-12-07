import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { GroceryComponent } from './pages/grocery/grocery.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contactus', component: ContactusComponent},
    {path:'grocery', component: GroceryComponent},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LogoutComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
];
