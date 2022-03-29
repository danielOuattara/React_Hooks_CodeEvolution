/* simple useState & useEffect, axios + then/catch 
------------------------------------------------------------*/

import { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingUseState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }, []);
  return (
    <>
      <p>{loading ? "Loading ..." : post.title} </p>
      <p>{error ? error : null}</p>
    </>
  );
}

export default DataFetchingUseState;

//----------------------------------------------------------------------------------

/* simple useState & useEffect, axios try catch async/await 
------------------------------------------------------------*/

// import { useState, useEffect } from "react";
// import axios from "axios";

// function DataFetchingUseState() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [post, setPost] = useState({});

//   //   const resquester = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://jsonplaceholder.typicode.com/posts/1"
//   //       );
//   //       setLoading(false);
//   //       setPost(response.data);
//   //       setError("");
//   //     } catch (error) {
//   //       setLoading(false);
//   //       const errorMessage = error.message;
//   //       setError(errorMessage);
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     resquester();
//   //   }, []);

//   //---------------

//   useEffect(() => {
//     // auto invoked
//     (async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts/1"
//         );
//         setLoading(false);
//         setPost(response.data);
//         setError("");
//       } catch (error) {
//         setLoading(false);
//         const errorMessage = error.message;
//         setError(errorMessage);
//       }
//     })();
//   }, []);

//   return (
//     <>
//       <p>{loading ? "Loading ..." : post.title} </p>
//       <p>{error ? error : null}</p>
//     </>
//   );
// }

// export default DataFetchingUseState;
