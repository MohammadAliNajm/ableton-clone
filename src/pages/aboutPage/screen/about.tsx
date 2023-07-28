import React from 'react'
import Navigationbar from '../../../components/navbar/navbar'
import LandingImage from '../components/landingImage'
import './about.scss'
import Reveal from '../components/reveal'
type Props = {}

const AboutScreen = (props: Props) => {
  return (
    <React.Fragment>
         <Navigationbar/>
        <Reveal children={<LandingImage />} />
        <Reveal children={<LandingImage />} />
    </React.Fragment>
  )
}

export default AboutScreen