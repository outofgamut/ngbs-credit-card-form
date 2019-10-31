import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardFormComponent } from './credit-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';

storiesOf('CreditCardForm', module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [CreditCardFormComponent]
    })
  )
  .add('default', () => {
    return {
      template: `<ngbs-credit-card-form-credit-card-form></ngbs-credit-card-form-credit-card-form>`
    };
  });
