import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/AppHeader/Header';
import { Main } from './components/AppMain/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { defaultTheme } from './styles/defaultTheme';
import { darkTheme } from './styles/darkTheme'
// import { defaultTheme } from './styles/defaultTheme';

function App() {
  return (   
    <ThemeProvider theme={ darkTheme }>   
      <BrowserRouter>               
          <Header /> 
          <Main>
            <Router/>
          </Main>   
          <GlobalStyle />      
      </BrowserRouter> 
    </ThemeProvider>         
  )
}
export default App