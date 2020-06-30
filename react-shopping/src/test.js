import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('92arMYZBHtr0AUK5xxwU').collection('cartItems').doc('YIXuTCGz0LUUnNTlsLoL')
firestore.doc('/users/92arMYZBHtr0AUK5xxwU/cartItems/YIXuTCGz0LUUnNTlsLoL');
firestore.collection('/users/92arMYZBHtr0AUK5xxwU/cartItems');
