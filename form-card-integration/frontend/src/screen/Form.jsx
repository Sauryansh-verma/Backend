const Form = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <form className="p-4 border-[2px] border-gray-300 bg-gray-100 rounded-xl flex flex-col gap-6 w-80">
        <input className="border-[1px] outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="text"  placeholder="Name"/>
        <input className="border-[1px] outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="email" placeholder="Email"/>
        <input className="border-[1px] outline-none py-2 px-4 rounded-xl bg-white border-gray-400" type="text" placeholder="Image"/>
        <button className="bg-blue-500 rounded-xl py-2 text-white font-[400] text-lg">Submit</button>
      </form>
    </div>
  )
}

export default Form
