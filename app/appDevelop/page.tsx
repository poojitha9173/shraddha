import AppDevelopmentStack from '@/components/appdevelopmentstack'
import DevelopmentProcessSection from '@/components/appProcess'
import AppDevelopmentServicesSection from '@/components/appServices'
import ContactPage from '@/components/contact'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const AppDevelop = () => {
  return (
    <div>
   <HeroSection
  tag = "APP DEVELOPMENT"
  title = "Transform Your Ideas Into Reality"
  description = "We build innovative, user-friendly mobile applications that engage users and drive business growth. From concept to deployment, our development team creates custom solutions for iOS and Android platforms."
  primaryBtnText = "Discuss Your Project"
  primaryBtnLink = "#"
  imageSrc = "/image_3bf766.png"
/>
        <AppDevelopmentServicesSection/>
        <AppDevelopmentStack/>
        <DevelopmentProcessSection/>
        <ContactPage/>
    </div>
  )
}

export default AppDevelop