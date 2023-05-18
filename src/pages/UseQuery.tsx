import { useState } from 'react';
import {useQuery} from 'react-query';
function UseQueryComponent() {
    const [posts, setPosts] = useState([]);
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine

    setPosts(data);
	return (
		<div>
			<h1>Random Fact:</h1>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post['id']}>
                        <h3 className="post-title">{post['title']}</h3>
                        <p className="post-body">{post['body']}</p> 
                    </div>
                );
            })}
		</div>
	);
}

export default UseQueryComponent;