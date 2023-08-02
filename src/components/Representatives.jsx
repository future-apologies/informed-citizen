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
      <div className="content">
        <p>REPRESENTATIVES</p>
      </div>
      <ul>
        {members.map((member) => (
          <div className='content'>
            <li key={member.id} className='member-preview'>
              {member.first_name} {member.last_name} ({member.party}) - {member.role}
            </li>
          </div>

        ))}
      </ul>
    </div>
  );
};

export default Representatives;
