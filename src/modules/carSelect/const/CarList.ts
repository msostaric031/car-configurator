import { config } from 'config';
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { CarOptionProps } from '../types';

initializeApp(config.firebaseConfig);

const storage = getStorage();

const car1Ref = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/front-1.png',
);

const car2Ref = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS6/front-1.png',
);

const car3Ref = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audie-tronGT/front-1.png',
);

export const CarList: CarOptionProps[] = [
  { id: 'car1', img: car1Ref, year: 2022, carName: 'Audi RS5' },
  { id: 'car2', img: car2Ref, year: 2022, carName: 'Audi RS6 Avant' },
  { id: 'car3', img: car3Ref, year: 2022, carName: 'Audi e-tron GT' },
];
