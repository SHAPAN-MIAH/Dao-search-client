import React, { useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DAOCategoryFilterItem from '../DAOCategoryFilterItem/DAOCategoryFilterItem';
import './DAOSearchByCategory.css'
// import {AllCategoryDaoData} from '../../AllCategoryDaoData'
// import axios from 'axios';

const DAOSearchByCategory = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([])


  // const handelAddAllCategoryDao = () => {
  //   axios.post(`http://localhost:5500/allCategoryDao`, AllCategoryDaoData)
  //   .then(res => {
  //     alert('data added successfully.')
  //   })
  // }


  const FilterDAO  = () => {
    setSearchFilterData([])

    const selectCategory = document.querySelector('.selectCategory');

    fetch(`https://dry-cliffs-15181.herokuapp.com/allCategoryDao?category=${selectCategory.value}`)
    .then((res) => res.json())
    .then((data) => setFilterData(data));
    
  }

  const HandleSearch = (e) => {
    setFilterData([])

    const query = e.target.search.value;

    fetch(`https://dry-cliffs-15181.herokuapp.com/searchAllCategoryDaoByName?Name=${query}`)
    .then((res) => res.json())
    .then((data) => {
      setSearchFilterData(data)
    });

    e.preventDefault()
  }

  


  return (
    <div className='container'>
      <p  className='backBtn mt-5'><a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</a></p>
      <h2 className='title text-center mt-5'>DAO search by category</h2>
      <div className='search-category-container'>
        <div>
          <h6>Search <span>DAO</span></h6>
          <p>Set your <span>DAO type</span> choose <span>category</span> to start your search. <a href=''>View search tips</a></p>
        </div>

        {/* <button onClick={handelAddAllCategoryDao} type="">send</button> */}

        <div className='d-flex'>
          <select onClick={()=>FilterDAO()} name="category" id="category" className='selectCategory'>
            <optgroup label="">
              <option value="" disabled selected>Select category</option>
              <option value="CultureCommunityDAO">Culture Community DAO</option>
              <option value="DeFiPartnershipDAO">De-Fi Partnership DAO</option>
              <option value="DeFiProtocolDAO">De-Fi Protocol DAO</option>
              <option value="EducationResearchDAO">Education Research DAO</option>
              <option value="GameSportsDAO">Game Sports DAO</option>
              <option value="InvestmentDAO">Investment DAO</option>
              <option value="LegalDAO">Legal DAO</option>
              <option value="NFTSArtDAO">NFTS Art DAO</option>
              <option value="SocialGoodDAO">Social Good DAO</option>
              <option value="ToolSoftwaresDAO">Tool Softwares DAO</option>
              <option value="UtilityDAO">Utility DAO</option>
            </optgroup>
            
          </select>

          <div>
            <form onSubmit={HandleSearch} className='category-searchInput-container d-flex'>
              <input type="text" name='search' placeholder="Search by category" className="form-control shadow-none category-searchInput"  />
              <button  type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className='filter-results mt-5'>
        <h4 className='text-center'>Results</h4>
        {
          filterData.map(filterItem => <DAOCategoryFilterItem key={filterItem.id} filterItem={filterItem}></DAOCategoryFilterItem>)
        }
      </div>
      <div>
        {
          searchFilterData.map(searchItem => <div>
            <div className='user-div my-3'>
              <p><span>Name: </span>{searchItem.Name}</p> 
              <p><span>Description: </span> {searchItem.Description}</p>
              <p><span>WebSite Link: </span> {searchItem.Website}</p>
            </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default DAOSearchByCategory;