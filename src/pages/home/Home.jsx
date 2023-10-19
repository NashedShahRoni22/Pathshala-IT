import React from 'react'
import HomeLanding from './HomeLanding'
import HomeCourseBar from './HomeCourseBar'
import HomeSeminar from './HomeSeminar'
import HomeAdmission from './HomeAdmission'
import HomeCourses from './HomeCourses'
import HomeServices from './HomeServices'
import HomeChoseUs from './HomeChoseUs'
import HomeStories from './HomeStories'

export default function Home() {
  return (
    <section>
        <HomeLanding/>
        <HomeCourseBar/>
        <HomeAdmission/>
        <HomeCourses/>
        <HomeServices/>
        <HomeSeminar/>
        <HomeChoseUs/>
        <HomeStories/>
    </section>
  )
}
