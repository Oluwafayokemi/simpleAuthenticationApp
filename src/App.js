import styled from 'styled-components'
import { Authenticate } from './Authenticate'
import background from './image/home.jpg'
import './App.css'

function App () {
  return (
    <Container className='App'>
      <div className='background'></div>
      <div className='sign-up'>
        <Authenticate />
      </div>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  .sign-up {
    width: 30%;
    background-image: url(${background});
    background-position: bottom;
    opacity: 0.8;
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
  }
  .background {
    width: 70%;
    height: 100vh;
    background: url(${background}) no-repeat ;
    background-size: cover;
  }
`
