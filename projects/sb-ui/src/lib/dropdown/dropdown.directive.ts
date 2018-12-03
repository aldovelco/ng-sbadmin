import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Inject, Input, NgZone, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { fromEvent, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[sbDropdown]'
})
export class DropdownDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('open') _open = false;
  @HostBinding('class.dropdown') dropdownClass = true;
  private destroy$ = new Subject<void>();

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone,
    private el: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    if (this.isOpen()) {
      this.setupAutoClose();
    }
  }

  isOpen() {
    return this._open;
  }

  open() {
    this._open = true;
    this.el.nativeElement.classList.add('show');

    this.setupAutoClose();
  }

  close() {
    this._open = false;
    this.el.nativeElement.classList.remove('show');
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  private setupAutoClose() {
    this.ngZone.runOutsideAngular(() => {
      const clicks$ = fromEvent(this._document, 'click').pipe(
        filter((event: any) => !this.el.nativeElement.contains(event.target)),
        take(1),
        takeUntil(this.destroy$)
      );

      clicks$.subscribe(() =>
        this.ngZone.run(() => {
          this.close();
          this.changeDetector.markForCheck();
        })
      );
    });
  }
}
