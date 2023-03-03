import './App.css';
import {  useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';


const App = () => {
  const [cat, setCat] = useState([]);
  const [basket, setBasket] = useState([]);
  const fetchImageData = async () => {
    
    try {

      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

    
      if(!response.ok){
        throw new Error(response.statusText)
      }

      const data = await response.json();
      console.log(data)
      return data 
      
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    const fetchData = async () =>{ 
        let catList = await fetchImageData();
          catList.map((cat)=>{ 
              cat.name = faker.name.firstName();
              cat.price = faker.commerce.price(500);
      })        
      setCat(catList);
  }
  fetchData();
  }, []);


const addToBasket = (cat) => {
  console.log('Cat in the basket')
  setBasket([...basket, cat]);
  console.log(cat)
}

const removeFromBasket = (removeCat) => {
  setBasket(basket.filter((cat) => cat !== removeCat))
}
  

  return (
      <div className="App">
      <div className="title-container">
      <span className='title'>Cats</span>
      <span className='title-4 title'>4</span>
      <span className='title-lyfe title'>Lyfe</span>
      </div>
      <div className="description-container">
        <h3 className="description-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate repellat natus, quam maiores molestias, esse amet hic soluta fugiat harum autem corrupti itaque error corporis facilis dolor beatae commodi sunt!
        </h3>
      </div>
      <div className="container">
      <div className="cat-cards">
      {cat.map((cat, index) => {
        // map through API data stored in the state and display it to the user
          return (
          <div className='cat-card' key={index}>
            <h3>Name: {cat.name}</h3>
            <img src={cat.url} alt="catto"/> 
            <p>£{cat.price}</p>
            <button onClick={() => addToBasket(cat)}>Add to basket</button>             
          </div>
          )
      })}
      </div>

      <div className="basket-container">
        <div className="basket-header">
        <h3 className='basket-heading'>Basket ({basket.length})</h3>
        <h4 className='basket-removeAll'>Remove All</h4>
        </div>
        {basket.map((cat, index) => {
          return (
          <div className='basket-cat-card' key={index}>
            <h3>{cat.name}</h3>
            <p>£{cat.price}</p>
            <button onClick={() => removeFromBasket(cat)}>❌</button>            
          </div>
          )
      })}
      <div className="basket-footer">
      
        <h4>Total: </h4>
        <button className="basket-buyBtn">Buy da kitties</button>
      </div>
      </div>
    </div>
    </div>

  );

}



export default App;
