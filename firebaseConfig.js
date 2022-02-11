import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlIMNh0ozyp_74dsch4RGnqghcJ2E1jfs',
  authDomain: 'friendly-reminders-os.firebaseapp.com',
  projectId: 'friendly-reminders-os',
  storageBucket: 'friendly-reminders-os.appspot.com',
  messagingSenderId: '335716950394',
  appId: '1:335716950394:web:d57a23eca2ba71222376c3',
  measurementId: 'G-X71C0N6LNQ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
