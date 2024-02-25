import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {

    private URL: string = 'https://restcountries.com/v3.1';

    public cacheStore:CacheStore = {
        by_Capital:{term: '', countries:[]},
        by_Country:{term: '', countries:[]},
        by_Region:{region: '', countries:[]},
    }

    constructor(private http: HttpClient) { 
    }


    getCountriesRequest(url:string):Observable<Country[]>{
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( error => of([ ])),
            delay(800)  
        );
    }

    searchCapital(term:string):Observable<Country[]>{
        const url = `${this.URL}/capital/${term}`;
        return this.getCountriesRequest(url).
        pipe(
            tap(countries => this.cacheStore.by_Capital = {term,countries})
        );
    }

    searchCountry(term:string):Observable<Country[]>{
        const url = `${this.URL}/name/${term}`;
        return this.getCountriesRequest(url).
        pipe(
            tap(countries => this.cacheStore.by_Country = {term,countries})
        );
    }

    searchRegion(region:Region){
        const url = `${this.URL}/region/${region}`;
        return this.getCountriesRequest(url).
        pipe(
            tap(countries => this.cacheStore.by_Region = {region,countries})
        );;
    }

    searchCountryByAlphaCode(code:string):Observable<Country | null>{
        return this.http.get<Country[]>(`${this.URL}/alpha/${code}`)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null)
            ,catchError(error => of(null))
        );
    }
}