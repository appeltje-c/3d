import theme from '@styles'
import {ThemeProvider, CssBaseline} from '@mui/material'
import {BrowserRouter} from "react-router-dom";
import Screens from "@screens";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <Screens/>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
