import React from 'react';
import { useState } from 'react';
import { AiOutlineClose} from 'react-icons/ai'
import { sendMail } from '../services/sendMail';

const Modal = ({isVisible, onClose}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isLicense, setIsLicense] = useState(false)
    const [isExperience, setIsExperience] = useState(false)

    if (!isVisible) return null

   

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose()
    }

    const submitForm = async (name, phone, isLicence, isExperience) => {
        if (name && phone && isLicence && isExperience) {
  //          await sendMail({name, phone, isLicense, isExperience})
        }
    }
    return (
        <div className='fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm z-50'
            id = "wrapper"
            onClick={handleClose}
        >
            <div className='md:w-[600px] w-[95%] flex flex-col text-xl'>
                <AiOutlineClose size={42} className='text-white place-self-end cursor-pointer' onClick={() => onClose()}/>
                <div className='bg-white rounded-xl p-3'>
                    <h3 className=' mb-4 px-10 pt-5 text-2xl font-medium text-gray-900'>
                        Пожалуйста, заполните поля
                    </h3>
                    <form className='space-y-6 px-10 ' action='/'>
                        <div>
                            <label 
                                    for="name"
                                    className='block text-sm font-medium text-gray-900 py-2'
                                >
                                Введите ваше имя:
                            </label>
                            <input 
                                id = 'name'
                                name = 'name'
                                placeholder='Имя'
                                className='bg-gray-50 border border-gray-300 text-gray-900
                                    text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5
                                '
                                required
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label 
                                    for="phone"
                                    className='block text-sm font-medium text-gray-900 py-2'
                                >
                                Введите ваш телефон:
                            </label>
                            <input 
                                id = 'phone'
                                name = 'phone'
                                placeholder='Телефон'
                                className='bg-gray-50 border border-gray-300 text-gray-900
                                    text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5
                                '
                                required
                                onChange={e => setPhone(e.target.value)}

                            />
                        </div>
                        <div>
                            <label
                                for="license"
                                className='block text-sm font-medium text-gray-900 py-2'
                            >
                                Водительское удостоверение РФ
                            </label>
                            <div className='flex'>
                                <div>
                                    <input type='radio' name = 'license' id='license_yes' className='' 
                                        onChange={e => setIsLicense(true)}
                                />
                                    <label htmlFor='license_yes' className='mx-2 text-sm text-gray-900'>
                                        Да
                                    </label>
                                </div>
                                <div className='mx-5'>
                                    <input type='radio' name = 'license' id='license_no' className=''/>
                                    <label htmlFor='license_no' className='mx-2 text-sm text-gray-900'>
                                        Нет
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                for="experience"
                                className='block text-sm font-medium text-gray-900 py-2'
                            >
                                Опыт работы в такси
                            </label>
                            <div className='flex'>
                                <div>
                                    <input type='radio' name = 'experience' id='experience_yes' className=''
                                        onChange={e => setIsExperience(true)}
                                    />
                                    <label htmlFor='experience_yes' className='mx-2 text-sm text-gray-900'>
                                        Да
                                    </label>
                                </div>
                                <div className='mx-5'>
                                    <input type='radio' name = 'experience' id='experience_' className=''/>
                                    <label htmlFor='experience_no' className='mx-2 text-sm text-gray-900'>
                                        Нет
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='bg-amber-400 bg-opacity-90 border border-gray-300 text-white
                                    text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 hover:bg-opacity-100
                                    cursor-pointer
                                '
                                onClick={(e) => {
                                    e.preventDefault()
                                    submitForm(name, phone, isLicense, isExperience)}}
                        >
                            Отправить
                        </div>
                    </form>
                    <div className='p-5 text-center text-xs text-gray-500'>
                        Нажимая "Отправить", вы даете согласие на обработку персональных данных
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;