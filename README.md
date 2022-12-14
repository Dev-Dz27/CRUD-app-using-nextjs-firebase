# 🍕🍍 Firebase + Next JS + TypeScript 🍍🍕

This is a demonstration repository on setting up:

- Next JS
- Firebase
- TypeScript

It displays the result of the question **Does pineapple belong on pizza** by signing in users via GitHub and allowing them to vote publicly.

It uses the [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks) library to display live updating data of the votes and user collections.

It also implements a **Cloud Function** to create a user document in the user collection whenever a sign-up event is triggered.

Thanks for checking it out!



{user && (
        <>
         <button style={{ fontSize: 18, marginRight: 8 }} onClick={signMeOut}>
              Sign Out ❌
            </button>
          <h1>Pineapple on Pizza?</h1>

          <div style={{ flexDirection: "row", display: "flex" }}>
            <button
              style={{ fontSize: 32, marginRight: 8 }}
              onClick={() => addVoteDocument("yes")}
            >
              ✔️🍍🍕
            </button>
            <h3>
              Pineapple Lovers:{" "}
              {
                votes?.docs?.filter(
                  (doc) => (doc.data() as VoteDocument).vote === "yes"
                ).length
              }
            </h3>
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <button
              style={{ fontSize: 32, marginRight: 8 }}
              onClick={() => addVoteDocument("no")}
            >
              ❌🍍🍕
            </button>
            <br />
           
            <h3>
              Pineapple Haters:{" "}
              {
                votes?.docs?.filter(
                  (doc) => (doc.data() as VoteDocument).vote === "no"
                ).length
              }

            </h3>
          </div>

          <div style={{ marginTop: "64px" }}>
            <h3>Voters:</h3>
            <div
              style={{
                maxHeight: "320px",
                overflowY: "auto",
                width: "240px",
              }}
            >
              {votes?.docs?.map((doc) => (
                <>
                  {/* <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} /> */}
                </>
              ))}
            </div>

          </div>
        </>
      )}
#   C R U D - a p p - u s i n g - n e x t j s - f i r e b a s e  
 #   C R U D - a p p - u s i n g - n e x t j s - f i r e b a s e  
 #   C R U D - a p p - u s i n g - n e x t j s - f i r e b a s e  
 