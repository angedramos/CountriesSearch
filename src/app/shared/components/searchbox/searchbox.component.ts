import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './searchbox.component.html' ,
  styleUrl: './searchbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchboxComponent implements OnInit{ 
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @ViewChild('txtSearchInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  private debouncer:Subject<string> = new Subject<string>();

  ngOnInit(): void {
      this.debouncer.pipe(
        debounceTime(500)
      ).subscribe(value =>{
        this.onDebounce.emit(value);
      })
  }



  searchByCapital(value:string):void{
    this.onValue.emit(value);
    this.tagInput.nativeElement.value = '';
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
