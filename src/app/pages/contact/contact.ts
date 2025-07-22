import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('https://formspree.io/f/xjkoywrz', form.value, {responseType: 'text'}).subscribe({
        next: () => {
          //TODO: this.toastr.success('Votre message a bien été envoyé !', 'Succès');
          form.resetForm();
        },
        error: () => {
          console.log('Une erreur est survenue. Veuillez réessayer.');
          //TODO: this.toastr.error('Une erreur est survenue. Veuillez réessayer.', 'Erreur');
        }
      });
    }
  }
}
