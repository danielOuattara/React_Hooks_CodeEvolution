
import { useEffect, useState} from 'react';
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);

    const [onePost, setOnePost] = useState({});
    const [postId, setPostId] = useState(1);

    const handleOnePostId = (event) => {
        setPostId(event.target.value)
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts', { params: {_limit: 10 }})
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res =>{
            console.log(res)
            setOnePost(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [postId])
    return (
        <div>
            <h2>Multiples posts</h2>
            {posts.map( (post) => (
                <li key={post.id}>{post.title}</li>
                ))}
            <hr/>
            <h2>Single post</h2>

            <input type="text"  value={postId} placeholder="Enter a integer" onChange={handleOnePostId} />
            <p>{onePost.title}</p>
        </div>
    )
}

export default DataFetching
