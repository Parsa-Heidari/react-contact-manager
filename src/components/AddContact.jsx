import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AddContact = ({ addNewContact }) => {
    
    const navigate = useNavigate()

    const [fName , setFName] = useState("")
    const [lName , setLName] = useState("")
    const [number , setNumber] = useState()

    const handleSubmit = ()=>{

        const newContact = {
            fName , 
            lName , 
            number
        }

        addNewContact(newContact)

        setFName("")
        setLName("")
        setNumber("")
    }

    return (
        <div className='add'>
            <form className="con h-full flex flex-col justify-between" onSubmit={()=>{handleSubmit() ; navigate("../contacts")}}>
                <div className='w-full flex flex-col gap-6'>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>First Name</h2>
                        <input type="text" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='First Name...' onChange={(e) => { setFName(e.target.value) }} required={true} />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>Last Name</h2>
                        <input type="text" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='Last Name...' onChange={(e) => { setLName(e.target.value) }} required={true} />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>phone number</h2>
                        <input type="number" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='phone Number...' onChange={(e) => { setNumber(e.target.value) }} required={true} />
                    </div>
                </div>
                <div className='flex w-full justify-between gap-6 h-12'>
                    <button className='bg-red-600 text-white w-1/2 rounded-lg hover:brightness-150' onClick={()=>{navigate("../contacts")}}>
                        cancel
                    </button>
                    <button className='b-purple text-white w-1/2 rounded-lg hover:brightness-150' >
                        add contact
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddContact
