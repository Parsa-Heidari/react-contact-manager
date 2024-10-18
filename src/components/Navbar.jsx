import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

const Navbar = ( {searchParams , setSearchParams}) => {

    const navigate = useNavigate()

    return (
        <div className='h-20 b-brown w-full fixed py-5 top-0 left-0'>
            <div className="con h-full grid grid-cols-12 gap-6">
                <div className='col-span-3 h-full flex items-center'>
                    <h1 className='text-white text-xl'>
                        my contacts
                    </h1>
                </div>
                <div className='col-span-6 h-full flex items-center overflow-hidden rounded-lg'>
                    <input type="text" placeholder='Search...'  className='h-full w-3/4 px-3' onChange={(e)=>{setSearchParams(e.target.value)}} value={searchParams}/>
                    <button className='h-full text-white w-1/4 b-purple hover:brightness-150'>
                        <SearchIcon />
                    </button>
                </div>
                <button className='col-span-3 text-white h-full b-purple rounded-lg hover:brightness-150' onClick={()=>{
                    navigate("/contacts/add")
                }}>
                    add new contact
                </button>
            </div>
        </div>
    )
}

export default Navbar
