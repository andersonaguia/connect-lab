import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/AppHeader/Header';
import { Main } from './components/AppMain/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthenticationProvider } from '../src/contexts/Authentication/AuthenticationProvider';
// import { defaultTheme } from './styles/defaultTheme';
import { darkTheme } from './styles/darkTheme'

function App() {
  return (   
    <ThemeProvider theme={ darkTheme }>
      <GlobalStyle /> 
      <BrowserRouter>  
        <AuthenticationProvider>
          <Header /> 
            <Main>
              <Router/>
            </Main> 
        </AuthenticationProvider>                
      </BrowserRouter> 
    </ThemeProvider>         
  )
}
export default App