import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ExpedienteFormComponent } from './components/expediente-form/expediente-form.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ExpedienteComponent, NosotrosComponent, ExpedienteFormComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
