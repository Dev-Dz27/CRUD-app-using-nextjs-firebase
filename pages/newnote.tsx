import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Auth from "../components/Auth";
import VoterList from "../components/VoterList";
import AddNote from "../components/Heading";

const newnote = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  // User Authentication
  const [user, loading, error] = useAuthState(firebase.auth());
  // console.log("loading", loading, "|", "Current user: ", user);

  // database
  const db = firebase.firestore();

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
// create a note
  const sendData = () => {
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

  // delete note
  const deleteTodo = (t) => {
    try {
        db
            .collection(user.uid)
            .doc(t)
            .delete()
            .then(console.log('Data was successfully deleted!'))
    } catch (error) {
        console.log(error)
    }
}

  // const addVoteDocument = async (input: string) => {
  //   await db.collection("notes").doc(user.uid).set({
  //     input,
  //   });

  return (
    <div
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      //   display: "flex",
      //   height: "100vh",
      //   width: "100vw",
      // }}
    >
      <input
        type="text"
        // onKeyDown={enterKey}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Learn Chakra-UI & Next.js"
      />
      <button onClick={() => sendData()}>+</button>
      <br />
      <br />
      <br />
      {/* {JSON.stringify(todos)} */}
      <ul>
        {todos.map((t, i) => {
          return (
            <li key={i} >{t}
            <Link href={`edit/${t}`} >
              <button>edit</button>
            </Link>
              <button onClick={() => deleteTodo(t)}>DELETE</button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default newnote;
