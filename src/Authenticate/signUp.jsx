import React from 'react'
import styled from 'styled-components'

export const SignUp = ({ checkButtonClick }) => {
  const handleFocus = event => {
    event.target.name === 'date' && (event.currentTarget.type = 'date')
  }

  const handleBlur = event => {
    if (event.target.name === 'date') {
      event.currentTarget.type = 'text'
      event.currentTarget.placeholder = 'Date of Birth'
    }
  }

  const handleClick = async () => {
    console.log(checkButtonClick, '##############')
    await checkButtonClick()
  }

  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p className='sign-up'>Sign Up</p>
        <input type='text' placeholder='First Name' name='firstName' required />
        <input type='text' placeholder='Last Name' name='lastName' required />
        <input type='email' placeholder='Email' name='email' required />
        <input
          type='text'
          placeholder='Date of Birth'
          id='date'
          name='date'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input
          type='password'
          placeholder='Confirm Passwod'
          name='password'
          required
        />
        <input type='submit' value='Sign Up' />
      </form>
      <div className='text-wrapper'>
        <p>
          Already have an account? Please{' '}
          <a onClick={() => handleClick()}>Sign in</a>
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .sign-up {
    color: #f52929;
    font-size: 40px;
    font-weight: 500;
  }
  form {
    max-width: max-content;
    margin: 0 auto;
    padding-top: 8em;
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
