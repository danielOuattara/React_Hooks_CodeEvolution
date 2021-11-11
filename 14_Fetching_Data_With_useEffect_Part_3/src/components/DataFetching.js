
import { useEffect, useState} from 'react';
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]); // for multiple posts request

    const [onePost, setOnePost] = useState({}); // for single post request
    const [typedId, setTypedId] = useState();
    const [postId, setPostId] = useState(0);

    const handleOnePostId = (event) => {
        setTypedId(event.target.value);
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        setPostId(typedId);

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

            <form onSubmit={handleSumbit}>
                <label htmlFor="">Enter an integer : </label>
                <input 
                    type="text" 
                    value={typedId} 
                    placeholder="Enter a integer" 
                    onChange={handleOnePostId} />
                <input type="submit" value="Send Request" />
            </form>

            <p>{onePost.title}</p>
        </div>
    )
}

export default DataFetching
