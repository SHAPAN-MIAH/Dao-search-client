import React, { useEffect, useState } from 'react';
import './SearchUsers.css'
import User from './../user/User';


const SearchUsers = (props) => {
  const searchData = props.searchFilterData

  const [userProfileData, setUserProfileData] = useState([]);

  useEffect(() => {
    fetch("https://dry-cliffs-15181.herokuapp.com/userProfiles")
    .then((res) => res.json())
    .then((data) => setUserProfileData(data));
  }, []);

  
  return (
    <div>
      <menu>
        <ul>
          <li>Profiles</li>
          <li>Links</li>
          <li>Latest</li>
          <li>Top</li>
          
        </ul>
      </menu>
      <div className='userContent'>
        {
          searchData.length? searchData.map(user => <User key={user.id} user={user}></User>):userProfileData.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default SearchUsers;