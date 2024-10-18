import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewContact = ({ contacts }) => {
    const params = useParams()
    const contact = contacts.find((contact, index) => {
        return index == params.id
    })

    const navigate = useNavigate()

    return (
        <div className='view'>
            <div className="con h-full flex flex-col justify-between">
                <div className='flex justify-between h-5/6 gap-6'>
                    <figure className='w-1/2 h-full rounded-lg overflow-hidden'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt={contact.fName} className='hover:scale-105' />
                    </figure>
                    <div className='w-1/2 text-white text-2xl flex flex-col gap-6'>
                        <h2>first Name : {contact.fName}</h2>
                        <h2>family name : {contact.lName}</h2>
                        <h2>phone number : {contact.number} </h2>
                    </div>
                </div>
                <div className='flex w-full justify-between gap-6 h-12'>
                    <button className='bg-red-600 text-white w-1/2 rounded-lg hover:brightness-150' onClick={() => { navigate("../contacts") }}>
                        cancel
                    </button>
                    <button className='b-purple text-white w-1/2 rounded-lg hover:brightness-150' onClick={() => { navigate("./update") }} >
                        edit info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewContact
