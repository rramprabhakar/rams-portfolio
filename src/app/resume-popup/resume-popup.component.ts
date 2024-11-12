import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume-popup',
  templateUrl: './resume-popup.component.html',
  styleUrls: ['./resume-popup.component.scss'],
  standalone: true
})
export class ResumePopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit();
  }
}
