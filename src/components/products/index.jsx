import { Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { products } from '../../data'
import SingleProduct from './SingleProduct'

const Products = () => {

    const theme = useTheme()
    const matches = useMediaQuery( theme.breakpoints.down( 'md' ) )

    const renderProducts = products.map( p => (
        <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={ p.id }
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <SingleProduct product={p} matches={matches}/>
        </Grid>
    ) )

    return (
        <Container>
            <Grid container
                  spacing={{xs: 2, md:3}}
                  justifyContent="center"
                  sx={ { margin: `20px 4px 10px 4px` } }
                  columns={{xs: 2, sm: 8, md: 12}}
            >
                { renderProducts }
            </Grid>
        </Container>
    )
}

export default Products
