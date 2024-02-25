import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchboxComponent } from '../../../shared/components/searchbox/searchbox.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { LoadingspinnerComponent } from '../../../shared/components/loadingspinner/loadingspinner.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent,
    LoadingspinnerComponent,
  ],
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public placeholderFromByCapital: string = 'Enter a Capital Country... 3 characters minimun';

  public countries: Country[] = [];

  public initialValue:string = '';

  public isLoading: boolean = false;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.by_Capital.countries;
    this.initialValue = this.countryService.cacheStore.by_Capital.term;
  }

  searchByCapital(term: string): void {
    if (term.length < 3) {
      this.isLoading = false;
      return; //If the term of the search is less than three characters, it's not valid
    }
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
