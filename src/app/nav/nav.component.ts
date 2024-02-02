import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  showSideBar() {
    const sidebar = document.getElementById('sidebar')
    sidebar!.style.display = 'flex';
  }

  hideSideBar() {
    const sidebar = document.getElementById('sidebar')
    sidebar!.style.display = 'none';
  }
}
