import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreditCardFormComponent],
  exports: [CreditCardFormComponent]
})
export class ComponentsModule {}
