import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-resume-popup',
  templateUrl: './resume-popup.component.html',
  styleUrls: ['./resume-popup.component.scss'],
  standalone: true
})
export class ResumePopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onClose() {
    this.closePopup.emit();
  }
}
