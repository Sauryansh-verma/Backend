import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router'
import axios from 'axios'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Form = () => {

    let {isUpdatedCard, setIsUpdatedCard} = useContext(MyContext);
    console.log(isUpdatedCard)

    const {register, handleSubmit, reset, formState: {errors}} = useForm(
        {
            mode: onchange,
            defaultValues: {
                name: isUpdatedCard.name,
                email: isUpdatedCard.email,
                image: isUpdatedCard.image
            }
        }
    );

    const navigate = useNavigate();

    const formSubmit = async (data) => {

        if(isUpdatedCard._id){
            try{
                let res = await axios.patch(`http://localhost:3000/card/update/${isUpdatedCard._id}`, data);
                console.log(res);
            }catch(error){
                console.log('error while updating card', error);
            }
            setIsUpdatedCard({});
        }else{
            try{
            let res = await axios.post('http://localhost:3000/card/create', data);
            console.log(res);
            }catch(errors){
                console.log('error while getting data :', errors);
            }
        }
        
        reset();
        navigate('/cards');
    }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(formSubmit)} className="p-4 border-[2px] border-gray-300 bg-gray-100 rounded-xl flex flex-col gap-6 w-80">
        <div>
            <input {...register("name", {
                required:{
                    value: true,
                    message: 'name is required'
                }
            })} className="border-[1px] w-full outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="text"  placeholder="Name"/>
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div>
            <input {...register('email', {
                required:{
                    value: true,
                    message: 'email is required'
                },
                pattern:{
                    value: /^\S+@\S+\.\S+$/,
                    message: 'please enter a valid email'
                }
            })} className="border-[1px] w-full outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="email" placeholder="Email"/>
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div>
            <input {...register('image', {
                required:{
                    value: true,
                    message: 'image is required'
                }
            })} className="border-[1px] w-full outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="text" placeholder="Image"/>
            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
        </div>
        <button className="bg-blue-500 rounded-xl py-2 text-white font-[400] text-lg">Submit</button>
      </form>
    </div>
  )
}

export default Form
