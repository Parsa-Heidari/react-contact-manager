import React from 'react'

import Contact from './Contact'

const Contacts = ({ contacts, setContacts, searchParams }) => {

    return (
        <section className='contacts text-white'>
            <div className="con h-full grid-cols-12 grid gap-6">
                {

                    contacts.length === 0 ? (
                        <h2 className='col-span-12 text-4xl w-full h-full flex justify-center items-center'>
                            no contacts were found
                        </h2>
                    ) :
                        contacts.filter((contact) => {
                            if (searchParams) {
                                return contact.fName.toLowerCase().includes(searchParams.toLowerCase()) || contact.lName.toLowerCase().includes(searchParams.toLowerCase())
                            } else {
                                return true
                            }
                        }).map((contact, index) => {
                            return (
                                <Contact fName={contact.fName} lName={contact.lName} number={contact.number} key={index} index={index} contacts={contacts} setContacts={setContacts} />
                            )
                        })
                }
            </div>
        </section>
    )
}

export default Contacts
