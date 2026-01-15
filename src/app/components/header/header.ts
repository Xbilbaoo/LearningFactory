import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'header-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobile = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, '(max-width: 767px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.cd.detectChanges();
      });
  }
}

