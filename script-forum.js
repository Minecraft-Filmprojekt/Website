   
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getFirestore, collection, doc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkcEXIo0Z73ZotmaLm0M8Q6mDPYskI-qw",
  authDomain: "test-5f9df.firebaseapp.com",
  projectId: "test-5f9df",
  storageBucket: "test-5f9df.appspot.com",
  messagingSenderId: "376666716083",
  appId: "1:376666716083:web:53da2289b7fc7c05de3dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

 export function addData() {
    var users = [];

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        users.push(doc.data());
    });

    // Add a new document with a generated id.
    var doAdd = true;
    /*for(var i = 0; i < users.length; i++) {
        if(users[i].name === "Franz Hubert") {
            doAdd = false;
        }
    }*/
    if(doAdd) {
        const docRef = await addDoc(collection(db, "threads"), {
        name: "Franz Hubert",
        wohnort: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        });
        console.log("Document written with ID: ", docRef.id);
    }
}

/*function getData() {
    
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAkcEXIo0Z73ZotmaLm0M8Q6mDPYskI-qw",
          authDomain: "test-5f9df.firebaseapp.com",
          projectId: "test-5f9df",
          storageBucket: "test-5f9df.appspot.com",
          messagingSenderId: "376666716083",
          appId: "1:376666716083:web:53da2289b7fc7c05de3dc6"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore();


        var users = [];

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            users.push(doc.data());
        });

        // Add a new document with a generated id.
        var doAdd = true;
        /*for(var i = 0; i < users.length; i++) {
            if(users[i].name === "Franz Hubert") {
                doAdd = false;
            }
        }*/
/*        if(doAdd) {
            const docRef = await addDoc(collection(db, "threads"), {
            name: "Franz Hubert",
            wohnort: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            });
            console.log("Document written with ID: ", docRef.id);
        }
}

function addListElement() {
    
}*/