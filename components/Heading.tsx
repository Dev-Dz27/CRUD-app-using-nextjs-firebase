import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import Link from "next/link";

function addNote() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>My Notes</h1>
      <Link href="/newnote/">
        <button > Add Note </button>
      </Link>
    </div>
  );
}

export default addNote;
