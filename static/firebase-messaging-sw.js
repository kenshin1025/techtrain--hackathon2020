importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js')

const config = {
  apiKey: "",
  messagingSenderId: "1043637844570"
}

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(config)
}

const messaging = firebase.messaging()
