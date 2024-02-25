import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { LoadingspinnerComponent } from '../../../shared/components/loadingspinner/loadingspinner.component';


@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule, LoadingspinnerComponent],
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  
  public country?: Country;

  constructor(private actived: ActivatedRoute, private countryService: CountryService, private router:Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.actived.params.pipe(
        switchMap(({id}) => this.countryService.searchCountryByAlphaCode(id))
      ).subscribe( country =>{
        if(!country) return this.router.navigateByUrl('');
        return this.country = country;
        // return;
      });
    }, 1000);


  }

  searchCountry(){
     
  }
}
