import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchItem, setSearchItem] = useState('');
  const [formVisibility, setFormVisibility] = useState(false);

  const displayedFoodList = foodList.filter((listItem) => {
    return listItem.name.toLowerCase().includes(searchItem);
  });

  const removeFoodItem = (name) => {
    const cleanedUpList = [...foodList].filter((x) => x.name !== name);
    setFoodList(cleanedUpList);
  };

  const handleFormVisibility = () => {
    formVisibility ? setFormVisibility(false) : setFormVisibility(true);
  };

  return (
    <div className="App">
      {formVisibility && <AddFoodForm setFoodList={setFoodList} />}
      <button id="show-button" onClick={handleFormVisibility}>
        {formVisibility ? 'Hide Form' : 'Show Form'}
      </button>
      <Search setSearchItem={setSearchItem} searchItem={searchItem} />
      <p style={{ fontWeight: '500' }}>Food List</p>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {displayedFoodList.length === 0 ? (
          <div>
            <p>Oops, there is no more content to show.</p>
          </div>
        ) : (
          displayedFoodList.map((foodItem) => {
            return (
              <div key={foodItem.name}>
                <FoodBox food={foodItem} remove={removeFoodItem} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
