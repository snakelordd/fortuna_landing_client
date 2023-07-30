import React from 'react';
import logo from '../assets/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const header = ({showForm, scroll, scrollSpy}) => {

    const [sidebarOff, setSidebarOff] = useState(false)
    const ids = ['cars', 'conditions', 'contacts']

    const activeId = scrollSpy(ids, 200)

    const menu = {
        0: 'cars',
        1: 'conditions',
        2: 'contacts'
    }

    const isHidden = (hidden) => {
        if (hidden) {
            return ' hidden '
        }
        
        return ''
    }



    const isActive = (index) => {
        if (menu[index] === activeId) {
            return ' text-green-500 '
        }

        return ''
    }

    return (
        <div className='sticky top-0 z-50 flex justify-center w-full bg-[#0B0B0B] select-none'>
            <header className=' w-full max-w-[1368px] bg-[#0B0B0B] text-white'>
                <div className='w-full flex shadow-md justify-between items-center p-4 select-none md:h-[100px]'>
                    <div className='flex items-center'>
                        <div className='md:w-[92px] w-[64px] ml-4'>
                            <img src={logo}/>
                        </div>                  
                        <ul className={`md:flex ml-5 items-center hidden font-light`}>
                            {
                                ['Автомобили','Условия','Контакты'].map((item, index) => {
                                    return <li key={index} onClick={() => scroll(menu[index])} 
                                        className={` ${isActive(index)} mx-5 cursor-pointer opacity-90 hover:opacity-100`}
                                    >
                                            {item}
                                        
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <AiOutlineMenu onClick={() => setSidebarOff(!sidebarOff)} size={38} className={`md:hidden mx-3 cursor-pointer ${isHidden(sidebarOff)}`}/>  
                    <div className='md:block hidden'>
                        <button className='mx-2 hover:bg-opacity-100 rounded-lg  bg-opacity-80 bg-green-500 px-4 p-2'
                             onClick={() => showForm(true)}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </header>
            <nav>
                <div className={`fixed top-0 right-0 w-[70%] bg-opacity-80 md:hidden bg-[#0B0B0B] h-full ${isHidden(!sidebarOff)} backdrop-blur-sm`}>
                    <div className='w-full flex justify-end'>
                        <AiOutlineClose onClick={() => setSidebarOff(!sidebarOff)} size={42} className={`text-white m-5 mx-10 cursor-pointer `}/>
                    </div>
                    
                    <ul className={`md:hidden mt-[10%] text-white flex flex-col items-end `}>
                        {
                            ['Автомобили','Условия','Контакты'].map((item, index) => {
                                return <li key={index} 
                                    className='mx-5 p-5 text-xl cursor-pointer opacity-80 hover:opacity-100'
                                    onClick={() => scroll(menu[index])} 
                                >
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default header;