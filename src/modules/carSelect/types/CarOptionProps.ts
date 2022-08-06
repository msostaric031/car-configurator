import { StorageReference } from 'firebase/storage';

export interface CarOptionProps {
  id: string;
  img: StorageReference;
  year: number;
  carName: string;
}
