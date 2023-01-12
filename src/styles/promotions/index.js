import { Box, styled, Typography } from '@mui/material'
import { Colors } from '../theme'

export const PromotionsContainer = styled( Box )( ( { theme } ) => ({
    [theme.breakpoints.up('md')]: {
        padding: '40px 0'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px',
    overflow: 'hidden',
    background: Colors.secondary,
}) )

export const MessageText = styled( Typography )( ( { theme } ) => ({
    [theme.breakpoints.up( 'md' )]: {
        fontSize: '3rem'
    },
    fontFamily: '"Montez", "cursive"',
    color: Colors.white,
    fontSize: '1.5rem'
}) )