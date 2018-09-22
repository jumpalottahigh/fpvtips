import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.GATSBY_FIREBASE_KEY,
  authDomain: 'fpvtips-com.firebaseapp.com',
  databaseURL: 'https://fpvtips-com.firebaseio.com',
  projectId: 'fpvtips-com',
  storageBucket: 'fpvtips-com.appspot.com',
  messagingSenderId: '24945881819',
}

const fire = firebase.initializeApp(config)

export default fire
