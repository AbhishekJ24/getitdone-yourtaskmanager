// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {

    return (
        <nav className='bg-violet-900 flex justify-between items-center py-5 px-14 mb-14'>
            <div className='text-violet-100 font-bold text-4xl'>GetItDone</div>
            <ul className='flex justify-center text-violet-200 font-medium text-xl gap-14'>
                <li> <a className='hover:text-violet-400' href="/">Home</a></li>
                <li> <a className='hover:text-violet-400' href="/">Docs</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
