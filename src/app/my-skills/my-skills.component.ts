import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  popups: Array<{
    content: string;
    positionX: string;
    positionY: string;
  }> = [];

  openPopup(name: string, event: MouseEvent): void {
    const clickX = event.clientX;
    const clickY = event.clientY;

    this.popups.push({
      content: name,
      positionX: clickX + 'px',
      positionY: clickY + 'px',
    });

    setTimeout(() => {
      this.popups.shift();
    }, 3000);
  }
}