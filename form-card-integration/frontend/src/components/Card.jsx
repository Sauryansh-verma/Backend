import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import {useNavigate} from 'react-router'

const Card = ({card, deleteCard}) => {

  const {setIsUpdatedCard} = useContext(MyContext);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl border-[2px] w-fit">
      <div><img className="h-60" src={card.image} alt="" /></div>
      <div className='flex flex-col gap-2'>
        <h1>{card.name}</h1>
        <p className='text-sm'>{card.email}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={() => {
          setIsUpdatedCard(card);
          navigate('/')
        }} className="py-1.5 px-2.5 text-white rounded-xl bg-yellow-900">Update</button><button onClick={() => deleteCard(card._id)} className="py-1.5 px-2.5 text-white rounded-xl bg-red-900">Delete</button>
      </div>
    </div>
  )
}

export default Card
