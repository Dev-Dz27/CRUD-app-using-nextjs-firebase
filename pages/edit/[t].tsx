import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Link from "next/link";

import firebase from "../../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";

const Note = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [user, loading, error] = useAuthState(firebase.auth());
  const db = firebase.firestore();

  const router = useRouter();
  const { t } = router.query;

  useEffect(() => {
    
  });
  
  const updateTodo = (t) => {
    try {
      db.collection(user.uid)
        .doc(input)
        .set({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(console.log("Data was successfully sent to cloud firestore!"));
    } catch (error) {
      console.log(error);
    }
  };


    // try {
    //     db
    //         .collection(user.uid)
    //         .doc(todos.t)
    //         .update({todo: 'test',
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //       })
    //         .then(console.log('Data was successfully deleted!'))
    // } catch (error) {
    //     console.log(error)
    // }


  // the excist data
  useEffect(() => {
    user?.uid &&
      firebase
        .firestore()
        .collection(user?.uid)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTodos(snapshot.docs.map((doc) => doc.data().todo));
        });
  });



  

//   console.log(todos);

  return (
    <div>
      {/* {JSON.stringify(todos.find(t))} */}
       {/* {JSON.stringify(todos)}  */}
       <p>note id: {t}</p>
      <input
        type="text"
        // onKeyDown={enterKey}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Firebase and Next.js"
      />
      <button 
      // onClick={updateTodo}
    //  onClick={() => updateTodo()}
      >++</button>
    </div>
  );
};

export default Note;
