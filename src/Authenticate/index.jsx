import React, { useState } from 'react'
import { SignIn } from './signIn'
import { SignUp } from './signUp'

export const Authenticate = () => {
  const [signIn, setSignIn] = useState(false)
  
  const checkButtonClick = (event) => {
    console.log(event, '@@@@@@@@@@@@@@@')
    setSignIn(!signIn)
  }
  return (
    <>
      {!signIn ? (
        <SignUp checkButtonClick={checkButtonClick} />
      ) : (
        <SignIn checkButtonClick={checkButtonClick} />
      )}
    </>
  )
}
