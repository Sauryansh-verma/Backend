import {NavLink} from 'react-router'

const Navbar = () => {
  return (
    <div className='py-4 px-6 flex bg-black rounded-b-2xl text-white justify-between items-center'>
      <h1 className='text-xl font-bold'>Logo</h1>
      <div className='flex gap-10 items-center'>
        <NavLink to={'/'} className='cursor-pointer'>Form</NavLink>
        <NavLink to={'/cards'} className='cursor-pointer'>Cards</NavLink>
      </div>
      <h1>Login</h1>
    </div>
  )
}

export default Navbar
