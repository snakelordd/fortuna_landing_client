import React from 'react';
import {AiOutlinePhone, AiOutlineMail, AiOutlineCompass} from 'react-icons/ai'

const Contacts = ({showForm}) => {
    return (
        <div id='contacts' className=' w-full  flex flex-col items-center bg-gray-200 bg-opacity-20 mt-10'>
            <div className='max-w-[1368px] w-full flex flex-col items-center w-max-[1368px] bg-white'>
                <div className='w-full flex-col justify-start '>
                    <h2 className='ml-[5%] pl-[4%] text-5xl'>О нас</h2> 
                    <div className=' w-full flex justify-center' >
                        <div className='w-full m-10  ml-[5%] pl-[1%] flex lg:flex-row flex-col lg:justify-between h-[480px] '>
                            <div className='w-full lg:w-[40%] flex justify-center items-center p-10 bg-black bg-opacity-5 rounded-3xl'>
                                <p className='w-4/5 text-center text-gray-500'>
                                    Сюда можно вставить какую либо информацию о компании, картинку или карту
                                </p>
                                {/* <button className='rounded-xl p-3 px-10 text-white bg-green-500 bg-opacity-90 hover:bg-opacity-100'>
                                    Как начать работать?
                                </button> */}
                            </div>
                            <ul className='lg:w-[50%] w-full flex flex-col mt-10 text-xl'>
                                <li className='mb-10 text-3xl'>
                                    <h3>
                                        Наши контакты:
                                    </h3>
                                </li>
                                <li className='flex items-center mb-5'>
                                    <div className='flex items-center'>
                                        <AiOutlinePhone />
                                        <div className='ml-5'>Телефон:</div>
                                    </div>
                                    <a className='ml-5 text-amber-500 cursor-pointer'
                                        href='tel:+7XXXXXXXXXX'
                                    >
                                        +7XXXXXXXXXX
                                    </a>
                                </li>
                                <li className='flex items-center mb-5'>
                                    <div className='flex items-center'>
                                        <AiOutlineMail />
                                        <div className='ml-5'>Эл. почта:</div>
                                    </div>
                                    <a className='ml-5 text-amber-500 cursor-pointer'
                                        href='mailto:example@mail.com'
                                    >
                                        example@mail.com
                                    </a>
                                </li>
                                <li className='flex items-center mb-6'>
                                    <div className='flex items-center'>
                                        <AiOutlineCompass />
                                        <div className='ml-5'>Расположение:</div>
                                    </div>
                                    <div className='ml-5 text-amber-500'>
                                       ул. Ленина 1
                                    </div>
                                </li>

                                {/* <li className='  lg:w-[30%] w-full bg-gray-200 border-2 bg-opacity-50 rounded-3xl flex  items-center '>
                                    <div className='w-[30%] bg-amber-400 p-5 rounded-3xl '>
                                        <AiOutlinePhone size={40} className='m-auto'/>
                                    </div>
                                    <p className='text-3xl mx-auto'>7978415619</p>
                                </li> */}
                            </ul>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;