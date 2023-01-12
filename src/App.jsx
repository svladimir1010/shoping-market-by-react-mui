import { Button, Container, ThemeProvider } from '@mui/material'
// import {ThemeProvider} from '@mui/system'
import { useEffect } from 'react'
import AppBar from './components/appbar'
import theme from './styles/theme'


function App() {
    useEffect( () => {
        document.title = 'React Material UI - Home'
    }, [] )

    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth='xl'
                sx={{background: '#fff'}}
            >
                <AppBar/>
                {
                    /*
                     AppBar
                     Banner
                     Promotions
                     title
                     Products
                     Footer
                     SearchBox
                     appDrawer
                     */
                }

            </Container>

        </ThemeProvider>
    )
}

export default App
