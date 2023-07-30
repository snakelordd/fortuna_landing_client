import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const ConditionItem = (props) => {
    const {conditions, button, header, showForm} = props

    return (
        <div className=' shadow-md  xl:w-[40%] w-full min-h-[560px] p-10 border-2 flex flex-col justify-between mb-10 bg-gray-100 bg-opacity-50 rounded-2xl'>
            <h3 className='text-center md:text-4xl text-3xl font-semibold md:p-3 '>
                {header}
            </h3>
            <div className='md:p-2 m-auto'>
                <ul className='w-full flex flex-col justify-between items-center'>
                    {
                        conditions.map((item, index) => {
                            return <li key={index} className='flex w-full md:p-4 py-4 items-center justify-around '>
                                <AiOutlineCheck size={24} className='text-green-600 mx-3'/>
                                <div className='w-[90%]'>
                                    <p className='text-xl'>
                                    {
                                        item
                                    }
                                    </p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <button className='p-3 md:mx-10 rounded-xl text-white transition ease-in-out 
                hover:shadow-md xl:hover:scale-105 hover:bg-opacity-100 bg-opacity-90 
                bg-amber-400'

                onClick={() => showForm(true)}
            >
                    {button}
            </button>
        </div>
    );
};

export default ConditionItem;