import '@fontsource/montez'
import { Box, List, styled, Typography } from '@mui/material'
import { Colors } from '../theme'

// container
export const AppbarContainer = styled( Box )( () => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px, 8px',
}) )

// header
export const AppbarHeader = styled( Typography )( () => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary,
}) )
// npm install @fontsource/montez


export const MyList = styled( List )( ( { type } ) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
}) )


export const ActionIconsContainerMobile = styled( Box )( () => ({
    display: 'flex',
    backgroundColor: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}) )

export const ActionIconsContainerDesktop = styled( Box )( () => ({
    flexGrow: 0,
}) )

