import { GlobalStyle } from './GlobalStyle/globalStyles'
import { Header } from './components/AppHeader/Header';
import { Main } from './components/AppMain/Main'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthenticationProvider } from '../src/contexts/Authentication/AuthenticationProvider';
import { ProductsProvider } from '../src/contexts/Products/ProductsProvider';
import { defaultTheme } from './styles/defaultTheme';
import { darkTheme } from './styles/darkTheme'

function App() {
  console.log(defaultTheme, darkTheme)
  return (   
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle /> 
      <BrowserRouter>  
        <AuthenticationProvider>
          <Header /> 
          <ProductsProvider>
            <Main>
              <Router/>
            </Main>
          </ProductsProvider>             
        </AuthenticationProvider>                
      </BrowserRouter> 
    </ThemeProvider>         
  )
}
export default App