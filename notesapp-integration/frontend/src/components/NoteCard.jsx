import React from 'react'

const NoteCard = ({note, deleteNote, updateNote}) => {
  return (
    <div className='border rounded-xl p-4 flex flex-col gap-4'>
      <h1 className='text-lg'>{note.title}</h1>
      <p className='text-sm'>{note.description.length > 30 ? note.description.slice(0, 30): note.description}</p>
      <div className='flex gap-4 justify-between items-center'>
        <button onClick={() => {updateNote(note)}} className='py-1.5 px-2 bg-yellow-900 rounded-lg'>Update</button>
        <button onClick={() => {deleteNote(note._id)}} className='py-1.5 px-2 bg-red-900 rounded-lg'>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
