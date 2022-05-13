import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { AiFillHome } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import {
   NavContainer,
   WebsiteLogo,
   LogOutButton,
   UnorderedList
} from './styles'

const Header = (props: any): React.ReactElement => {
   const logout = () => {
      const { history } = props
      Cookies.remove('jwt_token')
      history.replace('/login')
   }
   return (
      <NavContainer>
         <div>
            <UnorderedList className='unordered-list'>
               <Link to='/'>
                  <li>
                     <WebsiteLogo
                        src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
                        alt='website logo'
                     />
                  </li>
               </Link>

               <Link to='/'>
                  <li>
                     <p>Home</p>
                  </li>
               </Link>

               <Link to='/jobs'>
                  <li>
                     <p>Jobs</p>
                  </li>
                  <li>
                     <WebsiteLogo
                        src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
                        alt='website logo'
                     />
                  </li>
               </Link>

               <Link to='/'>
                  <li>
                     <p>Home</p>
                  </li>
               </Link>

               <Link to='/jobs'>
                  <li>
                     <p>Jobs</p>
                  </li>
               </Link>

               <li className='logout-list'>
                  <LogOutButton type='button' onClick={logout}>
                     Logout
                  </LogOutButton>
               </li>
            </UnorderedList>
         </div>
      </NavContainer>
   )
}
export default withRouter(Header)
