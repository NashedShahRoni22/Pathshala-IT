import React from 'react'
import HomeLanding from './HomeLanding'
import HomeCourseBar from './HomeCourseBar'
import HomeSeminar from './HomeSeminar'
import HomeAdmission from './HomeAdmission'
import HomeCourses from './HomeCourses'
import HomeServices from './HomeServices'
import HomeChoseUs from './HomeChoseUs'

export default function Home() {
  return (
    <section>
        <HomeLanding/>
        <HomeCourseBar/>
        <HomeSeminar/>
        <HomeAdmission/>
        <HomeCourses/>
        <HomeServices/>
        <HomeChoseUs/>
    </section>
  )
}
