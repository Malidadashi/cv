import React from 'react'
import IconBoxesContainer from '../../Containers/IconBoxesContainer/IconBoxesContainer'
import about from './about.css'
import DownloadResumeButton from '../../Hooks/DownloadResumeButton/DownloadResumeButton'
import Header from '../Heder/Header'

const CAbout = () => {
  return (
    <div className='About'>
      <div className='About-image'>
        <img src={''} alt='picture' />
      </div>

      <div className='About-introduction'>
        <h2>About Me</h2>
        <h4>My Introduction</h4>
        <IconBoxesContainer />
        <p>
          As a dedicated Frontend Developer
          specializing in the Next.js framework
          high-performance websites
        </p>
        <DownloadResumeButton />
      </div>
    </div>
  )
}

export default CAbout
