import React, { useEffect, useState } from 'react';
import DAOCategoryFilterItem from '../DAOCategoryFilterItem/DAOCategoryFilterItem';
import './DAOSearchByCategory.css'

const DAOSearchByCategory = () => {
  const [query, setQuery] = useState('')

  const [searchFilterData, setSearchFilterData] = useState([])
  const [allData, setAllData] = useState([])
  const [filterData, setFilterData] = useState([])

  const queryItem = allData.map(item => {
    return (item.name)
  });


  fetch(`http://localhost:5500/userProfiles`)
    .then((res) => res.json())
    .then((data) => {
      setAllData(data)
    }
  );

  const HandleSearch = () => {
    useEffect(() => {
      fetch(`http://localhost:5500/userProfile?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchFilterData(data)
        setQuery('')
      });
    }, []);

  }


  const FilterDAO  = () => {
    const selectCategory = document.querySelector('.selectCategory');
    if(selectCategory.value === "CultureCommunityDAO"){
      fetch("http://localhost:5500/cultureCommunityDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "DeFiPartnershipDAO"){
      fetch("http://localhost:5500/DeFiPartnershipDao")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "DeFiProtocolDAO"){
      fetch("http://localhost:5500/DeFiProtocolDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "EducationResearchDAO"){
      fetch("http://localhost:5500/EducationResearchDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "GameSportsDAO"){
      fetch("http://localhost:5500/GameSportsDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "InvestmentDAO"){
      fetch("http://localhost:5500/InvestmentDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "LegalDAO"){
      fetch("http://localhost:5500/LegalDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "NFTSArtDAO"){
      fetch("http://localhost:5500/nFTSArtDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "SocialGoodDAO"){
      fetch("http://localhost:5500/socialGoodDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "ToolSoftwaresDAO"){
      fetch("http://localhost:5500/toolSoftwaresDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    if(selectCategory.value === "UtilityDAO"){
      fetch("http://localhost:5500/utilityDAO")
      .then((res) => res.json())
      .then((data) => setFilterData(data));
    }
    
  }

  


  return (
    <div className='container'>
      <h2 className='title text-center mt-5'>DAO search by category</h2>
      <div className='search-category-container'>
        <div>
          <h6>Search <span>DAO</span></h6>
          <p>Set your <span>DAO type</span> choose <span>category</span> to start your search. <a href=''>View search tips</a></p>
        </div>
        <div className='d-flex'>
          <select onChange={()=>FilterDAO()} name="category" id="category" className='selectCategory'>
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
            <form  className='category-searchInput-container d-flex'>
              <input type="text" onBlur={e => setQuery(e.target.value)} placeholder="Search by category" className="form-control shadow-none category-searchInput"  />
              <button onClick={HandleSearch} type="submit">Search</button>
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
          searchFilterData.map(searchItem => <li>{searchItem.name}</li>)
        }
      </div>
    </div>
  );
};

export default DAOSearchByCategory;