import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Ayubowan! Welcome to DocWise Sri Lanka — a homegrown healthcare platform shaped by Sri Lankan patients,
            doctors and community health workers. We bring modern digital convenience with a warm, local touch so
            getting care feels familiar and reliable.
          </p>

          <p>
            From busy streets of Colombo to the coastal towns, DocWise connects you with trusted
            practitioners across the island. Whether you need a same-day clinic visit, a teleconsultation in Sinhala,
            Tamil or English, or a place to store your health records securely, our platform was built for Sri Lankan life.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            To make quality healthcare easy to access for every Sri Lankan by combining practical technology with
            community‑centred care — respectful of local culture, language and everyday needs.
          </p>

          <b className='text-gray-800'>Our Vision</b>
          <p>
            A healthier Sri Lanka where people can find the right care quickly, manage their health confidently, and
            stay connected to caregivers who understand their lives and communities.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='group border px-10 md:px-16 py-8 sm:py-16 flex flex-col text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='group-hover:text-white'>Island-wide Access</b>
          <p className='group-hover:text-white'>
            Find and book trusted clinics and doctors across Colombo, Kandy, Galle and beyond — useful whether you're
            in a city or a rural village.
          </p>
        </div>

        <div className='group border px-10 md:px-16 py-8 sm:py-16 flex flex-col text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='group-hover:text-white'>Local Language Support</b>
          <p className='group-hover:text-white'>
            Use DocWise in Sinhala, Tamil or English and get culturally sensitive care and reminders that fit your
            routine.
          </p>
        </div>

        <div className='group border px-10 md:px-16 py-8 sm:py-16 flex flex-col text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='group-hover:text-white'>Practical & Community‑Focused</b>
          <p className='group-hover:text-white'>
            We work with local GPs, specialists and public health teams to deliver features that matter — from maternal
            and child care reminders to chronic disease follow-up.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About