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

  showMenu() {

    const dropdown = document.getElementById("dropdown");
    if (dropdown) {

      if (dropdown.style.display === 'none') {

        dropdown.style.display = 'flex'

      } else { 
        
        dropdown.style.display = 'none' 
      
      }

    }

  }

  changeBg() {

    const body = document.querySelector("body")
    console.log(body); 

    if (body) {

      body.style.backgroundImage = "/IMG/web_basura_orilla_4f151f7a30.png"
      console.log(body);

    }
  }

}

