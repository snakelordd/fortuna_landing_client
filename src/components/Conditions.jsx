import React from 'react';

import ConditionItem from './ConditionItem';

const Conditions = ({showForm}) => {

    const rentConditions = [
        'Ежедневное списание арендной платы со счета в Яндекс.про',
        'Возможна оплата аренды наличными',
        'Автомобиль хранится у вас'
    ]

    const salaryConditions = [
        'Посменный график',
        'Смена - 12 часов',
        'Полное содержание автомобиля (топливо, мойка) за наш счет',
        'С вас - только заказы и содержание автомобиля в надлежащем для работы состоянии',
        'Авто хранится у вас'
    ]

    return (
        <div id='conditions' className=' w-full  flex flex-col items-center bg-gray-200 bg-opacity-20 '>
            <div className='max-w-[1368px] w-full flex flex-col items-center w-max-[1368px] bg-white'>
                <div className='w-full flex-col justify-start md:mt-[10%] mt-[20%]'>
                    <h2 className='ml-[5%] px-[4%] text-5xl'>Условия</h2> 
                    <div className='xl:mt-8 w-full flex justify-center' >
                        <div className='snap-center w-full flex lg:flex-row flex-col lg:items-start items-center md:justify-around  m-10'>
                            <ConditionItem header='Аренда автомобиля'  conditions={rentConditions} button='Оставить заявку' showForm={showForm}/>
                            <ConditionItem header='Зарплата' conditions={salaryConditions} button='Начать работать' showForm={showForm}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conditions;