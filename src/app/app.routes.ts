import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    // {path: "", redirectTo: "/home", pathMatch: "full"},
    // {path: "home", component: Home},
    {path: "", component: Home},
    {path: "about", component: About},
    {path: "contacts", component: Contacts},
    {path: "**", component: NotFound}
];
