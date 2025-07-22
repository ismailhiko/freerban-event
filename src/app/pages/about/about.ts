import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { members, Member } from './member';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  members = members;
  selectedMember = signal<Member | null>(null);

  openMember(member: Member) {
    this.selectedMember.set(member);
  }

  closeModal() {
    this.selectedMember.set(null);
  }
}
