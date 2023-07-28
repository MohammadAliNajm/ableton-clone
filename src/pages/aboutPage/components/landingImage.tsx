import React from 'react'
import sd from '../../../assets/firstimg.png'
import '../screen/about.scss'
type Props = {}

const LandingImage = (props: Props) => {
  return (
    <React.Fragment >
        <div className='landingImg'>
            <img width={1000} height={400} className='heroImage' src={sd} alt='HeroImage'/>
            <h1 className='titleHead'>Ableton</h1>
        </div>
    </React.Fragment>
  )
}

export default LandingImage