import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/header/Header'
import { Main } from './components/Main/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/defaultTheme';

function App() {
  console.log("THEME: ", defaultTheme)
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>        
          <Header /> 
          <Main>
            <Router/>
          </Main>               
        </BrowserRouter> 
      </ThemeProvider>         
    </>
  )
}
export default App
