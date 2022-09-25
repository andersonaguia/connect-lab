import { GlobalStyle } from '../../GlobalStyle/globalStyle'
import { Header } from '../../components/AppHeader/Header';
import { Main } from '../../components/AppMain/Main'
import { Footer } from '../../components/AppFooter/Footer';
import { Router } from '../../router/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthenticationProvider } from '../../contexts/Authentication/AuthenticationProvider';
import { ProductsProvider } from '../../contexts/Products/ProductsProvider';
import { useCustomTheme } from '../../contexts/CustomTheme/useCustomTheme';

export const AppLayout = () => {
    const { theme } = useCustomTheme()
    
    return(
        <ThemeProvider theme={ theme }>      
            <GlobalStyle /> 
            <BrowserRouter>  
                <AuthenticationProvider>
                    <Header /> 
                    <ProductsProvider>
                        <Main>
                            <Router/>
                        </Main>
                    </ProductsProvider> 
                    <Footer />
                </AuthenticationProvider>                
            </BrowserRouter>       
         </ThemeProvider>        
    )
}