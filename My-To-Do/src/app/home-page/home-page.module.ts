import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing-module';
import { MatCardModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    HomePageRoutingModule,
    FormsModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
