import { config } from 'config';
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { SliderImageProps } from '../types';

initializeApp(config.firebaseConfig);

const storage = getStorage();

const imgRef1 = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/back-1.png',
);
const imgRef2 = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/back-left-1.png',
);
const imgRef3 = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/side-1.png',
);
const imgRef4 = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/front left-1.png',
);
const imgRef5 = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/front-1.png',
);

export const SliderImages: SliderImageProps[] = [
  { id: 'img1', img: imgRef1 },
  { id: 'img2', img: imgRef2 },
  { id: 'img3', img: imgRef3 },
  { id: 'img4', img: imgRef4 },
  { id: 'img5', img: imgRef5 },
];
