import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import Auth from "../components/Auth";
import VoterList from "../components/VoterList";
import AddNote from "../components/Heading";

type VoteDocument = {
  vote: string;
};

export default function Home() {
  // Firestore
  const db = firebase.firestore();

  // User Authentication
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("loading", loading, "|", "Current user: ", user);
  // Votes Collection
  const [votes, votesLoading, votesError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );

  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }

  // Create document function
  const addVoteDocument = async (vote: string) => {
    await db.collection("votes").doc(user.uid).set({
      vote,
    });
  };

  // sign out
  const signMeOut = () => {
    firebase.auth().signOut();
    console.log("sign out successful");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gridGap: 8,
        background:
          "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      {loading && <h4>Loading...</h4>}
      {!user && <Auth />}
      {user && <AddNote />}
    </div>
  );
}
