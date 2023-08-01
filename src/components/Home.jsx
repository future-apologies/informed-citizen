import React from 'react';
import axios from 'axios';

const Home  = ({baseURL, API_KEY, headers}) => {
    
  const [post, setPost] = React.useState(null);

  React.useEffect((baseURL, headers) => {

    axios.get(baseURL, headers).then((response) => {
      setPost(response.data);
    });
  }, []);  
  
  if(!post) return null;


  
    return (
        <div className="content">
            <h1 className="main-title">Informed Citizen</h1>
            <ul>
                {post.map(member => (
                <li key={member.id}>{member.name} ({member.party})</li>
                ))}
            </ul>
        </div>
      );
}
 
export default Home;