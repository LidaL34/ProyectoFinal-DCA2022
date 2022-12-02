import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { DataShape } from "../components/Home/dataHome.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7SPzrKpAUVqDj0TH4YtljAUMf7EFAgvk",
  authDomain: "dcatest-eee65.firebaseapp.com",
  projectId: "dcatest-eee65",
  storageBucket: "dcatest-eee65.appspot.com",
  messagingSenderId: "950842798751",
  appId: "1:950842798751:web:a57ccf77bd93c0e746e8aa",
  measurementId: "G-DDXP1L28VN"
};

interface postDataSnapshot extends DataShape {
  data: () => DataShape;
}

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const addPost = async ({
    username,
    img,
    info
  }:{
    username: string;
    img: string;
    info: string;
  }) => {
    try {
      await addDoc(collection(db,"post"),{
        username,
        img,
        info
      });
      return true;

    } catch (error) {

      return false;
    }
  }


  export const getPost = async () => {
    try {
      const posts: DataShape [] = [];
      const querySnapshot = await getDocs (collection(db, 'post'));
      querySnapshot.forEach ((post: postDataSnapshot) => {
        post
      });
      return posts

    } catch (error){
      console.log(error);
    }
  }