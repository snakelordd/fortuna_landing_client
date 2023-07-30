import React from 'react';
import Header from './header';
import taxi from '../assets/kia_top.png'
import taxi2 from '../assets/taxi2.png'


import {AiFillCar, AiFillSetting, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'
import {FcHighPriority} from 'react-icons/fc'
import {GiCarKey, GiReceiveMoney} from 'react-icons/gi'

const main = ({showForm}) => {
    return (
        <div className='overflow-x-hidden w-full h-full bg-[#0B0B0B] bg-opacity-90 flex justify-center items-start select-none'>
            <div className=' max-w-[1368px] w-full h-full flex justify-center  items-start bg-[#0B0B0B]'>
                <div className='p-[4%] xl:ml-[5%] text-white w-full flex h-full flex-col xl:justify-start justify-around '>
                    <div className='w-full flex md:fl-row flex-col xl:justify-start items-center'>
                        <h1 className=' uppercase lg:text-9xl text-5xl md:block font-extrabold xl:w-full'>Аренда </h1>
                        <h1 className=' uppercase lg:text-9xl text-5xl  md:block hidden font-extrabold  xl:w-full'> автомобилей</h1>
                        <h1 className=' uppercase lg:text-9xl text-5xl  md:hidden  font-extrabold  xl:w-full'> авто</h1>
                    </div>
                    
                    <p className='w-[50%] lg:block hidden mt-8 opacity-70 font-light'>
                        Для работы в такси
                    </p>
                    {/* <ul className='text-light text-sm p-3 text-white text-opacity-50'>
                        {
                            [
                                {
                                    text: 'Обслуженные и готовые к работе автомобили' ,
                                },
                                {
                                    text: 'Круглосуточная техподдержка для водителей',
                                },
                                {
                                    text: 'Собственная станция обслуживания автомобилей',
                                },
                                {
                                    text: 'Высокий приоритет',
                                },
                                {
                                    text: 'Моментальный вывод средств на карту',
                                },
                                {
                                    text:  'В выходной день автомобиль остается у вас',
                                }        
                            ].map((item, index) => {
                                return <li key={index} className=' list-disc p-1' >{item.text}</li>
                            })
                        }
                    </ul> */}
                    <div  className='lg:hidden  m-2 max-w-[200px] mx-auto flex justify-center'>
                            <img src={taxi} className=''/>
                    </div>
                    <div className='relative z-10 bottom-5 justify-start w-full xl:mt-14 lg:mt-8 md:block'>
                        <button className='p-5 md:mb-0 mb-20 lg:px-10 lg:w-[20%] w-full bg-amber-400 rounded-xl bg-opacity-80 hover:bg-opacity-100'
                            onClick={() => showForm(true)}
                        >
                            Начать работать
                        </button>
                    </div>
                </div>
                <div className='lg:w-full h-full lg:block hidden'>
                    <div className='relative mt-[20%]'>
                        <div  className='xl:w-[1200px] lg:w-[1100px] lg:-right-96  absolute xl:-right-72 top-0'>
                            <img src={taxi2} className=' bg-cover'/>   
                        </div>
                                         
                    </div>
                </div>

            </div>
        </div>
    );
};

export default main;