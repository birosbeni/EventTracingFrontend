import { FormControl } from '@angular/forms';

export interface IFormEventDetails {
  name: FormControl<string>;
  location: FormControl<string>;
  country: FormControl<string>;
  capacity: FormControl<number>;
}
