import React, {ReactNode} from 'react'
import {Box} from '@mui/material'
import TopBar from '@components/layout/TopBar'

interface IScreenWrapperProps {
    children: ReactNode
}

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({children}) => {
    return (
        <Box>
            <TopBar/>
            {children}
        </Box>
    )
}

export default ScreenWrapper
