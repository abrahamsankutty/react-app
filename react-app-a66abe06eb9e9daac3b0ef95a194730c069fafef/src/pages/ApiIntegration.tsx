import { useEffect, useState } from "react";

export default function ApiIntegration(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
        return(
        <>
            <div className="posts-container">
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post['id']}>
                        <h3 className="post-title">{post['title']}</h3>
                        <p className="post-body">{post['body']}</p> 
                    </div>
                );
            })}
   </div>
        </>
    );

}