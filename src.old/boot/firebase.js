import { initializeApp } from 'firebase/app';

let app;

export default (() => {
    if(!app) {
        const firebaseConfig = {
            apiKey: "AIzaSyA-OYDNLxZtHK5BSgujZ6zTocHUQ8L_w3M",
            authDomain: "jogo-da-vida-nook.firebaseapp.com",
            projectId: "jogo-da-vida-nook",
            storageBucket: "jogo-da-vida-nook.appspot.com",
            messagingSenderId: "1094797099201",
            appId: "1:1094797099201:web:74504502e06e11e4c75440",
            measurementId: "G-S9XC51X8LK"
        };
        app = initializeApp(firebaseConfig);
    }

    return app;
})();