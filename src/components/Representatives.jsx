import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Representatives = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_PROPUBLICA_API_KEY; // Replace with your actual API key
    const apiUrl = 'https://api.propublica.org/congress/v1/116/senate/members.json';

    const config = {
      headers: {
        'X-API-Key': apiKey,
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        setMembers(response.data.results[0].members);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(members);

  return (
    <div>
      <h1>Congress Members from New York</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.first_name} {member.last_name} ({member.party}) - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Representatives;
