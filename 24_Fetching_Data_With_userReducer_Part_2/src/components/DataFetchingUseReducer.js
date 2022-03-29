// import { useReducer, useEffect } from "react";
// import axios from "axios";

// const initialState = {
//   loading: true,
//   error: "",
//   post: {},
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         error: "",
//         post: action.payload,
//       };
//     case "FETCH_FAIL":
//       return {
//         loading: false,
//         error: action.payload,
//         post: {},
//       };
//     default:
//       return state;
//   }
// };

// function DataFetchingUseReducer() {  // axios, then catch
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         dispatch({ type: "FETCH_SUCCESS", payload: response.data });
//       })
//       .catch((error) => {
//         dispatch({ type: "FETCH_FAIL", payload: error.message });
//       });
//   }, []);
//   return (
//     <>
//       <p>{state.loading ? "Loading ..." : state.post.title} </p>
//       <p>{state.error ? state.error : null}</p>
//     </>
//   );
// }

// export default DataFetchingUseReducer;

//----------------------------------------------------------------------------


 /* axios, async/await, try/catch 
 ----------------------------------*/

import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_FAIL":
      return {
        loading: false,
        error: action.payload,
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingUseReducer() {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const requester = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts/1"
  //       );
  //       dispatch({ type: "FETCH_SUCCESS", payload: response.data });
  //     } catch (error) {
  //       dispatch({ type: "FETCH_FAIL", payload: error.message });
  //     }
  //   };

  //   useEffect(() => {
  //     requester();
  //   }, [state]);

  //------------------------

  // auto invoked function
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    })();
  }, []);

  return (
    <>
      <p>{state.loading ? "Loading ..." : state.post.title} </p>
      <p>{state.error ? state.error : null}</p>
    </>
  );
}

export default DataFetchingUseReducer;
