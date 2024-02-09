import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import {List, Divider} from '@mui/material'
import DrawerLink from '@components/navigation/DrawerLink.tsx'
import {Studio} from '@types'
import Screen = Studio.Screen;

const drawerWidth = 240;

export default function ScreenWrapper({children}: any) {

    return (
        // @ts-ignore
        <Box>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}>
                <Box>

                    <Divider sx={{pt: 5}}/>
                    <List>
                        <DrawerLink path={Screen.Basic} title={`Basic`}/>
                    </List>

                </Box>
            </Drawer>
            <Box component="main" sx={{height: '100vh'}}>
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
}
