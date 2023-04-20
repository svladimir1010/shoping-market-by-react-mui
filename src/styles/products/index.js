import { Box, Button, IconButton, styled } from '@mui/material'
import { slideInBottom, slideInRight } from '../../animation'
import { Colors } from '../theme'

export const Product = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
    }
}))

export const ProductImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '20px'
    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}))

export const ProductFavButton = styled(ProductActionButton)(({isFav, theme}) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
}))


export const ProductAddToCart = styled(Button)(({show, theme}) => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation:
        show && `${slideInBottom} .5s cubic-bezier(0.250, .460, .450, .940) both`
    },
    background: Colors.secondary,
    opacity: .9,
}))


export const ProductMetaWrapper = styled(Box)(({ theme}) => ({
 padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))



export const ProductActionWrapper = styled(Box)(({show, theme}) => ({
        [theme.breakpoints.up('md')]: {
            display: show ? 'visible' : 'none',
            position: 'absolute',
            right: 0,
            top: '20%',
            animation:
            show && `${slideInRight} .5s cubic-bezier(0.250, .460, .450, .940) both`,
        }
}))
