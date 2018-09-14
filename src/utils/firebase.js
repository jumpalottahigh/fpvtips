import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyCSn9N4iYU8-7jNQpqUqDJ1Gzk3urqTnQs',
  authDomain: 'fpvtips-com.firebaseapp.com',
  databaseURL: 'https://fpvtips-com.firebaseio.com',
  projectId: 'fpvtips-com',
  storageBucket: 'fpvtips-com.appspot.com',
  messagingSenderId: '24945881819',
}

const fire = firebase.initializeApp(config)

export default fire
