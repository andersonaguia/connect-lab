import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/header/Header'
import { Main } from './components/Main/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { defaultTheme } from './styles/defaultTheme';
import { darkTheme } from './styles/darkTheme'
// import { defaultTheme } from './styles/defaultTheme';

function App() {
  console.log("THEME: ", darkTheme)
  return (   
    <BrowserRouter> 
      <ThemeProvider theme={ darkTheme }>        
                
          <Header /> 
          <Main>
            <Router/>
          </Main>   
          <GlobalStyle />            
       
      </ThemeProvider> 
      </BrowserRouter>         
  )
}
export default App
