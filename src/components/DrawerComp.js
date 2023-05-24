import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = () => {
    const[open,setOpen] = useState(false)
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
      <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Users</ListItemText>
            </ListItemIcon>
        </ListItemButton>
      </List>
      </Drawer>
      <IconButton>
        <MenuRoundedIcon/>
      </IconButton>
      
    </>
  )
}

export default DrawerComp
