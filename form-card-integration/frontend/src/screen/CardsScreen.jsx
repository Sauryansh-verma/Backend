import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'

const CardsScreen = () => {
  const [allCards, setAllCards] = useState([]);

  const getAllCards = async () => {
    try{
      setAllCards((await axios.get('http://localhost:3000/card/getAll')).data.data);
    }catch(error){
      console.log(`error while getting data: ${error}`);
    }
  }

  useEffect(() => {
    getAllCards();
  }, []);

  const deleteCard = async (id) => {
    try{
      let res = await axios.delete(`http://localhost:3000/card/${id}`);
      console.log(res);
    }catch(error){
      console.log(`error while deleting card ${error}`);
    }
    getAllCards();
  }


  return (
    <div className="p-4 flex gap-4">
      {
        allCards.map(val => <Card key={val._id} deleteCard={deleteCard} card={val}/>)
      }
    </div>
  )
}

export default CardsScreen;
