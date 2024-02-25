import { NgModule } from '@angular/core';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { RouterModule, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const countryRoutes: Routes = [
    { path: 'byCapital', component: ByCapitalPageComponent },
    { path: 'byCountry', component: ByCountryPageComponent },
    { path: 'byRegion', component: ByRegionPageComponent },
    { path: 'by/:id', component: CountryPageComponent },
    { path:'**', redirectTo: 'byCapital' }
    
];

@NgModule({
    imports: [
        RouterModule.forChild(countryRoutes)
    ],
    exports: [RouterModule],
    providers: [provideClientHydration(),provideHttpClient(withFetch(  ))],
})
export class CountryRotingModule { }
