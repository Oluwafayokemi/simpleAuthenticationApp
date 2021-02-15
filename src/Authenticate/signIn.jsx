import React from 'react'
import styled from 'styled-components'

export const SignIn = ({ checkButtonClick }) => {
  
  const handleClick = () => {
    checkButtonClick()
  }
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p className='welcome'>Welcome Back</p>
        <input type='email' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <input type='submit' value='Sign In' />
      </form>
      <div className='text-wrapper'>
        <p>
          Do not have an Account? Please{' '}
          <a onClick={() => handleClick()}>Sign Up</a>
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .welcome {
    color: #f52929;
    font-size: 40px;
    font-weight: 500;
  }
  form {
    max-width: max-content;
    margin: 0 auto;
    padding-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 500px;
      padding: 1.5em;
      margin-bottom: 1em;
      text-align: left;
      border-radius: 8px;
    }
    input[type='submit'] {
      color: #fff;
      background: #f52929;
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
      padding: 7px 50px;
      width: auto;
      height: auto;
      text-align: center;
      border-radius: 0;
      border: none;
      max-width: inherit;
      cursor: pointer;
      border-radius: 8px;
    }
    input[type='submit']:hover {
      opacity: 0.9;
    }
  }

  .text-wrapper {
    p {
      color: #fff;
      font-weight: 500;

      a {
        color: #f52929;
        cursor: pointer;
      }
    }
  }
`
