// import { useEffect, useState} from 'react';
// import axios from 'axios';

// function DataFetching() {
//     const [ posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts', { params: {_limit: 10 }})
//         .then(response =>{
//             setPosts(response.data)
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
//     }, [])
//     return (
//         <div>
//             {posts.map( (post) => (
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </div>
//     )
// }

// export default DataFetching;



import { useEffect, useState } from "react";
// import axios from 'axios';

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        method: "GET",
      })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
              }
          return response.json();
        })
        .then((data) => setPosts(() => data))
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {}
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default DataFetching;
