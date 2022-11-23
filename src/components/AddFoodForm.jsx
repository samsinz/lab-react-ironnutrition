// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import './AddFoodForm.css';
import {useState} from 'react'

// Iteration 4
function AddFoodForm({setFoodList}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(null)
  const [servings, setServings] = useState(null)


  const handleSubmit = (event) => {
    event.preventDefault();
    setFoodList((currentFoodList) => {
      return ([...currentFoodList, {name, image, calories, servings}])
    })
  };

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.value)
  }

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value)
  }

  const handleServingsChange = (event) => {
    setServings(event.target.value)
  }


  return (
    <form className="AddFoodForm" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange}></Input>

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange}></Input>

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange}></Input>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
