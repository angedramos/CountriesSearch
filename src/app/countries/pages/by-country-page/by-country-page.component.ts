import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from '../../../shared/components/searchbox/searchbox.component';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { CountryService } from '../../services/country.service';
import { LoadingspinnerComponent } from '../../../shared/components/loadingspinner/loadingspinner.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule,SearchboxComponent,CountryTableComponent, LoadingspinnerComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public placeholderFromByCountry: string = 'Enter a Country... 3 characters minimun';

  public countries: Country[] = [];

  public initialValue:string = '';

  public isLoading: boolean = false;
  constructor(private countryService:CountryService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.by_Country.countries;
    this.initialValue = this.countryService.cacheStore.by_Country.term;
  }

  searchByCountry(term:string):void{

    if (term.length < 3) {
      this.isLoading = false;
      return; //If the term of the search is less than three characters, it's not valid
    }
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe(data =>{
      this.countries = data
      this.isLoading = false;
      
    })
  }

}
