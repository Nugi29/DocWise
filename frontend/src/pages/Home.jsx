import React from 'react'
import Header from '../components/Header.jsx'
import SpecialaityMenu from '../components/specialityMenu.jsx'
import TopDoctors from '../components/TopDoctors.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialaityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default Home