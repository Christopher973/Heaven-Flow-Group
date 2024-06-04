import { Component, HostBinding, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heaven-Flow-Group';

  darkMode = signal<boolean>(false);
  currentYear: number = new Date().getFullYear();
  language: string = 'fr'


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

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

  changeLanguage(language: string): void {
    if(language === 'fr') {
      language = 'en'
    } else {
      language = 'fr'
    }
    this.language = language
    this.translate.use(language)
  }


}
