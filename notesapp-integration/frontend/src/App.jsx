import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {

  let [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  let [allNotes, setAllNotes] = useState([]);

  let [isUpdatedNote, setIsUpdatedNote] = useState(false);

  let inputHandler = e => {
    let {name, value} = e.target;

    setFormData({...formData, [name]: value});
  }

  const getAllNotes = async () => {
    try{
      setAllNotes((await axios.get('http://localhost:3000/notes/getAll')).data.data);
    }catch(error){
      console.log(`error while getting all notes ${error}`);
    }
  }

  const formHandler = async e => {
    e.preventDefault();

    if(isUpdatedNote){
      let res = await axios.put(`http://localhost:3000/notes/${isUpdatedNote}`, formData);
      console.log(res);
    }else{
      try{
        await axios.post('http://localhost:3000/notes/create', formData);
      }catch(error){
        console.log(`error while creating note ${error}`);
      }
    }


    setFormData({
      title: '',
      description: ''
    });
    getAllNotes();
  }

  const deleteNote = async id => {
    try{
      let res = await axios.delete(`http://localhost:3000/notes/delete/${id}`)
      console.log(res.data.message);
    }catch(error){
      console.log('error while deleting note', error);
    }
    getAllNotes()
  }
  
  const updateNote = async note => {
    setFormData(note);
    setIsUpdatedNote(note._id);
  }

  useEffect(() => {getAllNotes()}, []);

  return (
    <div className="h-screen bg-black text-white p-5 flex flex-col justify-evenly">
      
      <form onSubmit={formHandler} className="p-4 rounded-xl border flex flex-col gap-4 w-70">
        <input onChange={inputHandler} value={formData.title} className="border py-2 px-3" placeholder="Title" type="text" name="title"/>
        <input onChange={inputHandler} value={formData.description} required minLength={20} className="border py-2 px-3" placeholder="Description" type="text" name="description"/>
        <button className="bg-blue-700 p-2 rounded">Add</button>
      </form>
    <div className="flex gap-4">
      {
      allNotes.map(val => <NoteCard key={val._id} deleteNote={deleteNote} updateNote={updateNote} note={val}/>)
      }
    </div>
    </div>
  )
}

export default App