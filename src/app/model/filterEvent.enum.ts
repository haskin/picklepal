import { FilterType } from './filterTypes.enum';

export class FilterEvent<T> {
  type?: FilterType;
  value: string = 'All';
}
