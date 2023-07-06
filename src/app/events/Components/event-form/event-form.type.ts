import { FormControl } from '@angular/forms';

export interface IFormEventDetails {
  id: FormControl<string>;
  name: FormControl<string>;
  location: FormControl<string>;
  country: FormControl<string>;
  capacity: FormControl<number>;
}
