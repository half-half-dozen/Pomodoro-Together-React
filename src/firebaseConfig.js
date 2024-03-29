

import * as React from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyC4IF6cz_1yCzD0-cPITzE1_pn_qZXkx00",
  authDomain: "pomodorotogether-9cd25.firebaseapp.com",
  databaseURL: "https://pomodorotogether-9cd25-default-rtdb.firebaseio.com",
  projectId: "pomodorotogether-9cd25",
  storageBucket: "pomodorotogether-9cd25.appspot.com",
  messagingSenderId: "354922231576",
  appId: "1:354922231576:web:026ef87fca55927351906d",
  measurementId: "G-7L7GD1MP3X",
  storageBucket: "gs://pomodorotogether-9cd25.appspot.com",
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp()
}

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase