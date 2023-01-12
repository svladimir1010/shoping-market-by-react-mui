import { IconButton } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Actions from './actions'
import Appbar from './index'

const AppMobile = ( { matches } ) => {
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader>
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>

        /**
         * Appbar Container
         * Header
         * List
         **/
    )
}

export default AppMobile
