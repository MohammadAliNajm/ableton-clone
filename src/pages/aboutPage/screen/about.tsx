import React from 'react'
import Navigationbar from '../../../components/navbar/navbar'
import LandingImage from '../components/landingImage'
import './about.scss'
import Reveal from '../components/reveal'
import FoundationText from '../components/foundationText'
import SecondImages from '../components/SecondImages'
type Props = {}

const AboutScreen = (props: Props) => {
  return (
    <React.Fragment>
         <Navigationbar/>
        <Reveal children={<LandingImage />} hidden={{opacity:0,y:75}} visible={{opacity:1,y:0}} />
       <Reveal children={<FoundationText />} hidden={{opacity:0,y:75}} visible={{opacity:1,y:0}} />
       <Reveal children={<SecondImages />} hidden={{opacity:0,x:75}} visible={{opacity:1,x:0}} />
    </React.Fragment>
  )
}

export default AboutScreen