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

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

}
