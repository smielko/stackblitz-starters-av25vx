import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <main>
  <header class="brand-name">
    <img class="brand-logo" src="./assets/BMW-Logo.png" alt="logo" aria-hidden="true"
    width="200" 
    height="100">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>
`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
