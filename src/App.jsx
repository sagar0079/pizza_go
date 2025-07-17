import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FoodBody from './components/FoodBody';

export const BASE_URL = import.meta.env.PROD ? "" : "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectBtn, setSelectBtn] = useState('all');

  useEffect( () => {
    const fetchFoodData = async () => {

      setLoading(true);
      try {
        const response = await fetch(BASE_URL + "/api/food-data");
  
        const foodData = await response.json();
  
        setData(foodData);
        setFilterData(foodData);
        setLoading(false);
  
      } catch (error) {
        setError("unable to fetch data")
      }
    }

    fetchFoodData();
    
  }, [])

  const searchFood = (e) => {
    const foodItem = (e.target.value).toLowerCase();

    if(!foodItem)  {
      setFilterData(null);
    }
    
    const filterValue = data?.filter((val) => val.name.toLowerCase().includes(foodItem));

    setFilterData(filterValue);
  };

  const filterBtn = (type) => {
    if(type === 'all') {
      setFilterData(data);
      setSelectBtn('all');
      return;
    }

    const filterValue = data?.filter((val) => val.type.toLowerCase().includes(type.toLowerCase()));

    setFilterData(filterValue);
    setSelectBtn(type);

  }

  const filterBtnType = [
    {
      name : 'All',
      type : 'all',
    },
    {
      name : 'Breakfast',
      type : 'breakfast',
    },
    {
      name : 'Lunch',
      type : 'lunch',
    },
    {
      name : 'Dinner',
      type : 'dinner',
    },
  ];
  

  // fetchFoodData();

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;



  return <MainContainer>
    <TopContainer>
      <div className='main_bar'>
        <div className='logo'><img src="/images/Foody.svg" alt="Foody" /></div>
        <div className='search'><input onChange={searchFood} placeholder='Search Food....' /></div>
      </div>
      <FilterContainer>
      {
        filterBtnType.map((val) => (
        <Button 
        $isSelected = {selectBtn === val.type}
        key={val.name} onClick={() => filterBtn(val.type)}>
          {val.name}
        </Button>
      ))};
    </FilterContainer>
    </TopContainer>
    <FoodBody data = {filterData}/>
  </MainContainer>;
};

export default App;

const MainContainer = styled.div`
  position: relative;
`;

const TopContainer = styled.div`
  height: 241px;
  background: rgb(50, 51, 52);
  margin: 0 auto;

  .main_bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px auto;
    background: rgb(50, 51, 52);
    padding: 0px 120px;
    padding-top: 85px;

    @media (0 < width < 600px) {
        gap: 24px;
        padding: 0;
        margin-top: 24px;
        justify-content: center;
        height: 105px;
        
    }
  }

  .search {
    input {
      height: 40px;
      width: 285px;
      border: 1px solid red;
      border-radius: 5px;
      padding-left: 10px;
      background: transparent;
      color: white;
      &::placeholder {
        color: white;
      }
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 54px;

  @media (0 < width < 600px) {
       /* margin-top: 24px; */
       width: 326px;
       margin: 0 auto;
       margin-top: 24px;
    }
`;

export const Button = styled.div`
  background: ${({isSelected}) => (isSelected ? "#e01313" : "rgba(255, 67, 67, 1)")};
  border: 1px solid ${({isSelected}) => (isSelected ? "white" : "rgba(255, 67, 67, 1)")};
  padding: 6px 12px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #e01515;
  }
`;

// rgba(255, 67, 67, 1)

