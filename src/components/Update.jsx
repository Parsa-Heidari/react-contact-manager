import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = ({ contacts, setContacts, addNewContact }) => {
    const params = useParams()

    const contact = contacts.find((contact, index) => {
        return index == params.id
    })

    const [fName, setFName] = useState(contact.fName)
    const [lName, setLName] = useState(contact.lName)
    const [number, setNumber] = useState(contact.number)

    const handleUpdate = (index) => {
        const updatedContacts = contacts.filter((contact, i) => {
            return i !== parseInt(index)
        })
        const newContacts = [...updatedContacts]

        const newContact = {
            fName,
            lName,
            number
        }

        newContacts.push(newContact)
        setContacts(newContacts)
    }

    const navigate = useNavigate()

    return (
        <div className='update'>
            <form className="con h-full flex flex-col justify-between" onSubmit={() => {
                handleUpdate(params.id)
                navigate("../contacts");
            }}>
                <div className='w-full flex flex-col gap-6'>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>First Name</h2>
                        <input type="text" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='First Name...' value={fName} onChange={(e) => setFName(e.target.value)} required={true} />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>Last Name</h2>
                        <input type="text" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='Last Name...' value={lName} onChange={(e) => setLName(e.target.value)} required={true} />
                    </div>
                    <div>
                        <h2 className='text-white text-2xl mb-3'>phone number</h2>
                        <input type="number" className='w-full h-12 outline-none px-4 text-center rounded-lg' placeholder='phone Number...' value={number} onChange={(e) => setNumber(e.target.value)} required={true} />
                    </div>
                </div>
                <div className='flex w-full justify-between gap-6 h-12'>
                    <button className='bg-red-600 text-white w-1/2 rounded-lg hover:brightness-150' onClick={() => { navigate("../contacts") }}>
                        cancel
                    </button>
                    <button className='b-purple text-white w-1/2 rounded-lg hover:brightness-150' >
                        update info
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Update
