import React from 'react'
import { useNavigate } from 'react-router-dom';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = ({ fName, number, lName, index, contacts, setContacts }) => {
    const navigate = useNavigate()

    const handleDelete = (index) => {
        const filteredContacts = contacts.filter((contact , i) => {
            return i !== index
        })
        setContacts(filteredContacts)
    }

    return (
        <div className='contact col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col b-brown rounded-lg p-6 justify-between'>
            <figure className='w-full rounded-md overflow-hidden'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt={fName} className='w-full h-full object-cover' />
            </figure>
            <div className='flex w-full flex-col justify-between gap-2'>
                <div className='flex gap-4 items-center'>
                    <h3>
                        {fName}
                    </h3>
                    <h3>
                        {lName}
                    </h3>
                </div>
                <h3>
                    {number}
                </h3>
            </div>
            <div className='flex w-full justify-between'>
                <button className='bg-yellow-400 p-4 rounded-lg hover:brightness-125' onClick={()=>{navigate(`../${index}`)}}>
                    <RemoveRedEyeIcon />
                </button>
                <button className='bg-green-500 p-4 rounded-lg hover:brightness-125' onClick={()=>{navigate(`../${index}/update`)}}>
                    <EditIcon />
                </button>
                <button className='bg-red-600 p-4 rounded-lg hover:brightness-125' onClick={() => { handleDelete(index) }}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
}

export default Contact
