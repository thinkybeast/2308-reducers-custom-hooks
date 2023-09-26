import * as React from "react";
import useFetch from "../hooks/useFetch";

/*
    reducer: why??
    -  complex, interdependent pieces of state
    - abstract away control of state changes (maintainability and error prevention)


    usereducer is just like useState, except:
    - the argument that we pass to the setter, is NOT the next state; it is the argument to the reducer function


    {
        type: describe the action you want to take
    payload: optional data that the function might want to us
    }
*/

const User = () => {
  const { data, refetch } = useFetch(
    "https://random-data-api.com/api/v2/users"
  );
  const { data: user, isLoading, error } = data;

  if (error) {
    return (
      <div style={{ backgroundColor: "black", color: "lightgoldenrodyellow" }}>
        <h2>Our deepest apologies.</h2>
        <p>Unable to find a user as cool as you.</p>
        <p>{error}</p>
        <button onClick={refetch}>It is okay. Try again</button>
      </div>
    );
  }

  return (
    <article>
      {isLoading ? (
        <h2 style={{ color: "orchid", fontStyle: "italic" }}>
          Finding the coolest of users...
        </h2>
      ) : null}
      {user && !isLoading ? (
        <>
          <div
            style={{
              width: "300px",
              height: "300px",
              margin: "0 auto",
            }}
          >
            <img src={user.avatar} />
          </div>
          <p>
            Meet <b>{user.first_name}</b>
          </p>
          <p>They are passionate about {user.employment.key_skill}</p>
        </>
      ) : null}
      <button style={{ backgroundColor: "thistle" }} onClick={refetch}>
        Not cool enough. Give me another.
      </button>
    </article>
  );
};

export default User;
