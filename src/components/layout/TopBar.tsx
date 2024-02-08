import {Box, AppBar, Toolbar, Typography} from '@mui/material'

const TopBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        3D
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar
