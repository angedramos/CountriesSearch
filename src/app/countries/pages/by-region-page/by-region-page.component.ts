import { Component, OnInit } from '@angular/core';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { SearchboxComponent } from '../../../shared/components/searchbox/searchbox.component';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { LoadingspinnerComponent } from '../../../shared/components/loadingspinner/loadingspinner.component';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchboxComponent,
    CountryTableComponent,
    LoadingspinnerComponent,
  ],
  templateUrl: './by-region-page.component.html',
  styles: `.btn:active{
    color:#011AF4,
    border-radius:5px black;
    }`,
})
export class ByRegionPageComponent implements OnInit {

  public selectedRegion?: Region;

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countryService.cacheStore.by_Region.region;
    this.countries = this.countryService.cacheStore.by_Region.countries;
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countryService.searchRegion(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
