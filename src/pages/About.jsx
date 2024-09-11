import React from 'react'
import HeroAbout from "../components/heroAbout"
import Who from "../components/aboutcomponents/Who"
import Story from "../components/aboutcomponents/Story"
import OurMission from '../components/aboutcomponents/OurMission'
import OurValues from '../components/aboutcomponents/OurValues'
import TheTeam from '../components/aboutcomponents/TheTeam'
import Footer from "../components/layout/Footer"

const About = () => {
  return (
    <div>
      <HeroAbout />
      <Who />
      <Story />
      <OurMission />
      <OurValues />
      <TheTeam />
<Footer />
      </div>

  
  )
}

export default About