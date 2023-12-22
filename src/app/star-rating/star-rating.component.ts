// star-rating.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating">
      <span *ngFor="let _ of starsArray; let i = index" (click)="rate(i + 1)">
        {{ i < currentRating ? '★' : '☆' }}
      </span>
    </div>
  `,
  styles: [`
    .star-rating {
      font-size: 20px;
      cursor: pointer;
    }
  `]
})
export class StarRatingComponent {
  @Input() maxRating: number = 5;
  @Input() currentRating: number = 0;

  starsArray = Array.from({ length: this.maxRating });

  rate(rating: number): void {
    this.currentRating = rating;
  }
}
