import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'

const ProductMeta = ( { product, matches } ) => {
    return (
        <ProductMetaWrapper>
            <Typography variant={ matches ? 'h6' : 'h5' }>
                { product.name }
            </Typography>
            <Typography variant={ matches ? 'caption' : 'body' }>
                ${ product.price }
            </Typography>
        </ProductMetaWrapper>
    )
}

export default ProductMeta
