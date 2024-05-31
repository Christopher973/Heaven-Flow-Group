import { Component, HostBinding, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heaven-Flow-Group';

  darkMode = signal<boolean>(false)

  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000,
      once: false
    });
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

}
