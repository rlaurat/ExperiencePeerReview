// Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBsKdNN4aBDxYXzd62lLmqqRxPi9hCRdiI",
            authDomain: "experiencepeerreview.firebaseapp.com",
            databaseURL: "https://experiencepeerreview.firebaseio.com",
            projectId: "experiencepeerreview",
            storageBucket: "experiencepeerreview.appspot.com",
            messagingSenderId: "975792372955",
            appId: "1:975792372955:web:55cff2d32ee6185b3fe0fe"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // ref to firestore database
        var db = firebase.firestore();