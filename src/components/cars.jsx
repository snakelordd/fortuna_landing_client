import React from 'react';
import camry from '../assets/camry.png'
import CarItem from './CarItem'

const Cars = ({showForm}) => {

    const cars = [
        {model: 'Toyota Camry', fuel: 'Gas', price: '1000', image: 'https://s.auto.drom.ru/i24220/c/photos/generations/500x_toyota_camry_g7683.jpg?803542'},
        {model: 'Toyota Camry', fuel: 'Gas', price: '1000', image: 'https://s.auto.drom.ru/i24220/c/photos/generations/500x_toyota_camry_g7683.jpg?803542'},
        {model: 'Toyota Camry', fuel: 'Gas', price: '1000', image: 'https://s.auto.drom.ru/i24220/c/photos/generations/500x_toyota_camry_g7683.jpg?803542'},

    ]
    return (
        <div id='cars' className=' w-full xl:max-h-[800px] flex flex-col items-center bg-gray-200 bg-opacity-20'>
            <div className='max-w-[1368px] w-full flex flex-col items-center w-max-[1368px] bg-white'>
                <div className='w-full flex-col justify-start md:mt-[10%] mt-[20%]'>
                    <h2 className='ml-[5%] px-[4%] text-5xl'>Автомобили</h2> 
                    <div className='mt-10 w-full flex justify-center' >
                        <ul className='w-full flex lg:flex-row flex-col items-center md:justify-around mx-10'>
                            {
                                cars.map((item, index) => {
                                    return <CarItem model={item.model} image={camry} price={item.price} fuel={item.fuel} key={index} showForm={showForm}/>
                                } )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cars;