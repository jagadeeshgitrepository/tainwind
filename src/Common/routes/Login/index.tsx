import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { observer } from 'mobx-react'
import 'twin.macro'

import {
   TailwindContainer,
   TailwindLoginContainer,
   TailwindImage,
   TailwindImageContainer,
   TailwindFormContainer,
   TailwindFormLabel,
   TailwindFormInput,
   TailwindFormSubmit,
   TailwindFormError
} from './styledComponents'

interface MyState {
   username: string
   password: string
   showError: string
   errorMsg: string
}
@observer
class Home extends Component<any, MyState> {
   state: MyState = {
      username: '',
      password: '',
      showError: 'false',
      errorMsg: ''
   }
   changeUserName = event => this.setState({ username: event.target.value })

   changePassword = event => this.setState({ password: event.target.value })

   formSubmit = async (event: React.SyntheticEvent<HTMLInputElement>) => {
      event.preventDefault()
      const { username, password } = this.state
      const data = {
         username,
         password
      }
      const apiUrl = 'https://apis.ccbp.in/login'
      const options = {
         method: 'POST',
         body: JSON.stringify(data)
      }
      const response = await fetch(apiUrl, options)
      const dataResponse = await response.json()
      if (response.ok === true) {
         const { history } = this.props
         const jwtToken = dataResponse.jwt_token
         Cookies.set('jwt_token', jwtToken, { expires: 3 })
         history.replace('/')
      } else {
         console.log(dataResponse.error_msg)
         this.setState({ showError: 'true', errorMsg: dataResponse.error_msg })
      }
   }
   render(): React.ReactElement {
      const { username, password, showError, errorMsg } = this.state
      console.log(username)
      console.log(password)
      return (
         <TailwindContainer>
            <TailwindLoginContainer>
               <TailwindImageContainer>
                  <TailwindImage src='https://assets.ccbp.in/frontend/react-js/logo-img.png ' />
               </TailwindImageContainer>
               <TailwindFormContainer onSubmit={this.formSubmit}>
                  <TailwindFormLabel htmlFor='username'>
                     USERNAME
                  </TailwindFormLabel>
                  <TailwindFormInput
                     type='text'
                     id='username'
                     placeholder='Username'
                     onChange={this.changeUserName}
                     value={username}
                  />
                  <TailwindFormLabel htmlFor='password'>
                     PASSWORD
                  </TailwindFormLabel>
                  <TailwindFormInput
                     type='password'
                     id='password'
                     placeholder='Password'
                     onChange={this.changePassword}
                     value={password}
                  />
                  <TailwindFormSubmit type='submit'>Login</TailwindFormSubmit>
                  {showError ? (
                     <TailwindFormError>{errorMsg}</TailwindFormError>
                  ) : null}
               </TailwindFormContainer>
            </TailwindLoginContainer>
         </TailwindContainer>
      )
   }
}

export default Home
