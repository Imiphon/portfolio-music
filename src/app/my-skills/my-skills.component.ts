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

  showPopup = false;
  popupContent = '';

  popupPositionX:string = '0px';
  popupPositionY:string = '0px';

  openPopup(name: string, event:MouseEvent): void {
    this.popupContent = name;
    this.showPopup = true;
    // Ermittle die Position des angeklickten Elements
    const clickX = event.clientX;
    const clickY = event.clientY;

    console.log(clickX, clickY);
    
    // Setze die Popup-Position
    this.popupPositionX = clickX + 'px';
    this.popupPositionY = clickY + 'px';
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }
}
