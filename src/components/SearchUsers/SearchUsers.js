import React, { useEffect, useState } from 'react';
import './SearchUsers.css'
import User from './../user/User';

// import axios from 'axios';
// import { CultureCommunityDAO } from '../../FakeData1';
// import userProfileData from '../../fakeData';

const SearchUsers = () => {

  // const handleAddProduct = () => {
  //   axios.post('http://localhost:5500/cultureCommunityDAOdata', CultureCommunityDAO)
  //   .then(res => {
  //     alert('Product added successfully.')
  //   })
  // }

  const [userProfileData, setUserProfileData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/userProfiles")
    .then((res) => res.json())
    .then((data) => setUserProfileData(data));
  }, []);

  return (
    <div>
      <menu>
        <ul>
          <li>Top</li>
          <li>Latest</li>
          <li>Profiles</li>
          <li>Links</li>
        </ul>
      </menu>
      {/* <button onClick={handleAddProduct} type=""></button> */}
      <div className='userContent'>
        {
          userProfileData.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default SearchUsers;