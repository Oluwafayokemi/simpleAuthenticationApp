import React, { useState } from 'react'
import styled from 'styled-components'
import { postData } from '../utils/apiRequest'

const url = `${process.env.REACT_APP_SERVER_URL}/signup`

export const SignUp = ({ checkButtonClick }) => {
  const [user, setUser] = useState({})

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
    await checkButtonClick()
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await postData(url, user)
      console.log(response, '######################')
    } catch (error) {
      throw Error(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p className='sign-up'>Sign Up</p>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          required
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Date of Birth'
          id='date'
          name='dateOfBirth'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
          onChange={handleChange}
        />
        <input type='submit' value='Sign Up' />
      </form>
      <div className='text-wrapper'>
        <p>
          Already have an account? Please{' '}
          <span onClick={() => handleClick()}>Sign in</span>
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
    padding-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
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

      span {
        color: #f52929;
        cursor: pointer;
      }
    }
  }
`
