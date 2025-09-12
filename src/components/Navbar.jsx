import React, { useContext, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from '../context/ThemeContext';
import { FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import axios from 'axios';


const links = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology"]
const Navbar = ({ setArticles, setSearch  }) => {

    const API_KEY = "c62311ce5d784019b0fd589f77aae124"

    const { theme, setTheme } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    const handleChange = async (e) => {
        const search = e.target.value
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`)
            setArticles(res.data.articles)
           
            setSearch(search)

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='nav-container fixed w-full bg-[#b4b5eb] dark:bg-blue-900 shadow-md z-10'>

            <div className='nav max-w-7xl flex-col sm:flex-row  mx-auto px-4 py-3 flex items-center justify-between '>
                <Link to={'/'}>
                    <div className='logo text-2xl  font-bold text-[#e10d30db] dark:text-teal-300 cursor-pointer mb-2'>
                        {/* <Logo/> */}
                        <span className="text-indigo-700 dark:text-blue-500">Desh</span>
                        <span className="dark:text-yellow-400 ">Duniya🌍</span>
                    </div>
                </Link>

                <div className='imp-news hidden md:flex space-x-8 '>
                    {links.map((link) => {
                        return <Link to={`/${link.toLowerCase()}`} key={link} className='text-black-800 hover:text-[#b21717dc] dark:text-gray-200 dark:hover:text-teal-400 transition cursor-pointer font-semibold'>
                            {link}
                        </Link>
                    })}
                </div>

                <div className='search&dark flex items-center justify-center gap-4'>

                    <div className='searchIcon&input relative bg-gray-200 p-2 rounded-lg'>
                        <FiSearch className='absolute md:left-5 sm:left-3 top-[50%] transform -translate-y-1/2 text-muted-foreground h-4 w-4 ' />
                        <input onChange={handleChange} type="text" placeholder='Search news...' className='md:pl-10 pl-7 w-30 md:w-64 outline-none focus:outline-none bg-transparent ' />
                    </div>

                    <button onClick={toggleTheme} className='darkIcon bg-gray-200 px-3   dark:bg-blue-500 dark:text-gray-200 py-2 rounded-lg cursor-pointer'>
                        {
                            theme === 'light' ? <FaMoon /> : <FaSun />
                        }
                    </button>

                    {/* mobile menu button  */}
                    <button onClick={() => setOpen(!open)} className='menu-icon md:hidden dark:text-gray-200'>
                        {
                            open ? <IoClose size={28} /> : <FiMenu size={25} />
                        }
                    </button>
                </div>

            </div>

            {/* mobile menu */}
            {
                open && (
                    <div className='md:hidden px-4 pb-4'>
                        {
                            links.map((link) => {
                                return <Link key={link} to={`/${link.toLowerCase()}`} onClick={() => setOpen(false)}
                                    className='block py-2 text-gray-800 dark:text-gray-200 dark:hover:text-white hover:text-blue-600 transition'
                                >
                                    {link}
                                </Link>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Navbar

