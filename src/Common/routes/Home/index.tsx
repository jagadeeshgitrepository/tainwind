import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../Header/index'
import {
   HomeContainer,
   HomeInnerContainer,
   HomeHeading,
   HomeParagraph,
   FindJobsButton
} from './style'
class Home extends React.Component {
   render() {
      return (
         <>
            <Header />
            <HomeContainer>
               <HomeInnerContainer>
                  <HomeHeading className='home-heading'>
                     Find The Job That Fits Your Life
                  </HomeHeading>
                  <HomeParagraph>
                     Millions of people are searching for
                     jobs,salary,information,company reviews. Find the job that
                     fits your abilities and potential.
                  </HomeParagraph>
                  <Link to='/jobs' className='jobs-link'>
                     <FindJobsButton type='button'>Find Jobs</FindJobsButton>
                  </Link>
               </HomeInnerContainer>
            </HomeContainer>
         </>
      )
   }
}
export default Home
