import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'header-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isMobile = false
  toggleDropdown = false

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef, private router: Router
  ) {
    this.breakpointObserver
      .observe('(max-width: 767px)')
      .subscribe(result => {
        this.isMobile = result.matches
        this.cd.detectChanges()
      })
  }

  showMenu() {

    this.toggleDropdown = !this.toggleDropdown


  }

  navigate(where: string) {

    switch (where) {

      case "home":

        this.router.navigate(['/Home'])
        this.toggleDropdown = false
        break

      case "about":

        this.router.navigate(['/About'])
        this.toggleDropdown = false
        break

      case "buy":

        this.router.navigate(['/Buy'])
        this.toggleDropdown = false
        break

      case "login":

        this.router.navigate(['/Login'])
        this.toggleDropdown = false
        break

      default:

        this.router.navigate(['/Home'])
        this.toggleDropdown = false
        break

    }

  }

}

