import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner'

const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery( theme.breakpoints.down( 'md' ) )
    return (
        <BannerContainer>
            <BannerImage src="images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка
                    Туллия Цицерона.
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
