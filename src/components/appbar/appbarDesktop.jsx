import SearchIcon from '@mui/icons-material/Search'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import Actions from './actions'

const AppbarDesktop = ( { matches } ) => {

    return (
        /**
         * Appbar Container
         * Header
         * List
         **/

            <AppbarContainer>
                <AppbarHeader>My bags</AppbarHeader>
                <MyList type="row">
                    <ListItemText primary="Home"/>
                    <ListItemText primary="Categories"/>
                    <ListItemText primary="Products"/>
                    <ListItemText primary="Contact Us"/>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Actions matches={matches}/>
            </AppbarContainer>
    )
}

export default AppbarDesktop
