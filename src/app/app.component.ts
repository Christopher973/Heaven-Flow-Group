import { Component, HostBinding, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';


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
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

}
