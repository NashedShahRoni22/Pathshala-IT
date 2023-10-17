import React from 'react'
import HomeLanding from './HomeLanding'
import HomeCourseBar from './HomeCourseBar'
import HomeSeminar from './HomeSeminar'
import HomeAdmission from './HomeAdmission'
import HomeCourses from './HomeCourses'

export default function Home() {
  return (
    <section>
        <HomeLanding/>
        <HomeCourseBar/>
        <HomeSeminar/>
        <HomeAdmission/>
        <HomeCourses/>
    </section>
  )
}
