import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public name = "Денислав Иванов";
  public age = 22;
  public link = "https://www.youtube.com/@AutoTopnl";
  public moneyNumber = 1_000_000_000;

  public visibleSections = {
    name: false,
    auto: false,
    channel: false,
    wealth: false
  };

  toggleVisibility(section: string): void {
    this.visibleSections[section] = !this.visibleSections[section];
  }

}
