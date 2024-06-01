import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Renaissance University';

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public innerWidth: any;
  isDisabled!: boolean;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 600) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  snavToggle(snav: any){
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 600) {
      snav.toggle();
    }
  }

}
