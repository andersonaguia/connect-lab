import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/header/Header'
import { Main } from './components/Main/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main>
          <Router/>
        </Main>      
      </BrowserRouter>
       
    </>
  )
}

export default App
