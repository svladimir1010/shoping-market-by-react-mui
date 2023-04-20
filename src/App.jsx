import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react'
import AppBar from './components/appbar'
import Banner from './components/banner'
import Products from './components/products'
import Promotions from './components/promotions'
import theme from './styles/theme'


function App() {
  useEffect(() => {
    document.title = 'React Material UI - Home'
  }, [])

  return (
      <ThemeProvider theme={ theme }>
        <Container
            maxWidth="xl"
            sx={ { background: '#fff' } }
        >
          <AppBar/>
          <Banner/>
          <Promotions/>
          <Box textAlign="center" sx={ { p: 3 } }>
            <Typography variant="h4">
              Our Products
            </Typography>
          </Box>
          <Products/>
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
