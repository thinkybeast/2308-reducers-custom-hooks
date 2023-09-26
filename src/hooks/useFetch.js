import * as React from "react";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

function dataReducer(prevState, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...initialState, isLoading: true };
    case "FETCH_SUCCESS":
      return { ...initialState, data: action.payload };
    case "FETCH_ERROR":
      return { ...initialState, error: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useFetch = (url) => {
  const [data, dispatch] = React.useReducer(dataReducer, initialState);

  function chaosRando() {
    return Math.random() > 0.5 ? "" : "asdfasdf";
  }
  async function fetchData() {
    dispatch({ type: "FETCH_START" });
    try {
      const delay = await new Promise((resolve) =>
        setTimeout(() => resolve(), 1000)
      );
      const response = await fetch(url + chaosRando());
      const responseData = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: responseData });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch };
};

export default useFetch;
