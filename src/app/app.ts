import { Component, signal } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';


@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home, Gallery, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('freerban-event');



}
