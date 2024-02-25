import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';

export const routes: Routes = [
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'countries',
        loadChildren: () => import('../app/countries/country-routing.module').then(x => x.CountryRotingModule)
    },
    { path:'**', redirectTo: 'countries' }
];
