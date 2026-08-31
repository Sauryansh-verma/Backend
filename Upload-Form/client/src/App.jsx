import {useForm} from 'react-hook-form'
import axios from 'axios';

const App = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const formSubmit = async data => {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    
    for(let i = 0; i < data.files.length; i++){
      formData.append('files', data.files[i]);
    }

    try{
      let res = await axios.post('http://localhost:3000/user/create', formData);
      console.log(res);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} >
        <input {...register('name')} type="text" placeholder='name' /> <br />
        <input {...register('email')} type="email" placeholder='email' /> <br />
        <input {...register('files')} multiple type="file"  /> <br />
        <input type="submit" value="" /> <br />
      </form>
    </div>
  )
}

export default App
