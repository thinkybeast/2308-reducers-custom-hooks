import * as React from "react";
import useFetch from "../hooks/useFetch";

/*

Custom hooks: why?

- you want to extract out state and/or effect logic so that it can be reused by multiple components
*/

const Beer = () => {
  const { data, refetch } = useFetch(
    "https://random-data-api.com/api/v2/beers"
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
          Finding the frostiest of beers...
        </h2>
      ) : null}
      {user && !isLoading ? (
        <>
          <p>
            Enjoy this refreshing <b>{user.name}</b>
          </p>
          <p>Brought to you by your corporate friends at {user.brand}</p>
        </>
      ) : null}
      <button style={{ backgroundColor: "thistle" }} onClick={refetch}>
        I would like a better, more refreshing taste.
      </button>
    </article>
  );
};

export default Beer;
