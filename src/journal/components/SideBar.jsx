import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
    componet='nav'
    sx={{width: {sm: drawerWidth}, flexShrink: { sm:0 } }}
    >
        <Drawer
        variant='permanent' open sx={{display: {xs:'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth } }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Carlos Cabral
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Fugiat do nisi officia nulla dolore cillum dolore ullamco ea enim.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
