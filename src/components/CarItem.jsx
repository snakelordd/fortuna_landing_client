import React from 'react';

const CarItem = (props) => {
    const {model, fuel, price, image, showForm} = props
    return (
        <li key={model} className='lg:w-[30%] w-full select-none m-5 md:p-6 px-3 md:h-[400px] h-[250px] '>
            <div style={{backgroundImage: `url(${image})`}} className='border-2 transition ease-in-out md:hover:scale-110 cursor-pointer 
                w-full h-full bg-cover bg-center rounded-2xl flex flex-col justify-end bg-gray-100 bg-opacity-50 shadow-md '
                onClick={() => showForm(true)}    
            >
                <div className='w-full md:p-5 p-3 rounded-b-2xl flex  items-center justify-around text-white bg-black bg-opacity-60'>
                    <div className='flex w-1/2 justify-between'>
                        <div>{model}</div>
                        <div>{fuel}</div>
                    </div>
                    <button className='p-1 rounded-xl bg-amber-400 bg-opacity-90 hover:bg-opacity-100 px-10 '>{price} Р</button>
                </div>
            </div>
        </li>
    );
};

export default CarItem;