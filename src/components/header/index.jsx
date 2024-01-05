import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.svg"

import { FaQuestionCircle, FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="flex justify-between items-center py-5 gap-2">
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        <img src={logo} className='w-[120px]' alt="" />
                    </Link>

                    <ul className='flex justify-end items-center gap-7'>
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">Industries</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">Features</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">Chat</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">
                                <FaSearch />
                            </Link>
                        </li><li>
                            <Link to="/" className="text-gray-800 hover:text-gray-600">
                                <FaQuestionCircle />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white btn btn-primary hover:text-white">Login / Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header