import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { CountryRotingModule } from './countries/country-routing.module';
import { FooterComponent } from './shared/pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
    FooterComponent,
    CountryRotingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'countryApp';
}
