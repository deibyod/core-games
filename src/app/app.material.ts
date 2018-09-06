import { MatInputModule, MatButtonModule, MatCardModule, MatBadgeModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatCardModule, MatBadgeModule],
  exports: [MatInputModule, MatButtonModule, MatCardModule, MatBadgeModule],
})

export class MaterialModule { }