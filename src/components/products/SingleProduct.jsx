import { Stack } from '@mui/material'
import React from 'react'
import { Product, ProductActionWrapper, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FitScreenIcon from '@mui/icons-material/FitScreen'

const SingleProduct = ({product, matches }) => {
    return (
        <div>
            {/*
            Product
            Image
            Meta
            Actions
            Footer
             */}

            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
           <ProductActionWrapper>
               <Stack direction='column'>
                   <ProductFavButton isFav={0}>
                       <FavoriteIcon />
                   </ProductFavButton>
               </Stack>
           </ProductActionWrapper>
            </Product>
        </div>
    )
}

export default SingleProduct
