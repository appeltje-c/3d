import {createTheme, ThemeOptions, responsiveFontSizes} from '@mui/material/styles'
import '@fontsource-variable/outfit'

const mode = 'dark'

/**
 * @todo make theme complete
 * https://mui.com/material-ui/customization/dark-mode/
 */

const options: ThemeOptions = {
    palette: {
        mode,
        ...(mode === 'dark' && {
            background: {
                default: '#181C20',
                paper: '#181C20',
            },
            divider: '#292D3A'
        }),
        primary: {
            main: '#140d9a'
        },
        secondary: {
            main: '#721eb1'
        },
    },
    typography: {
        fontFamily: ['Outfit Variable'].join(',')
    }
}

export default responsiveFontSizes(createTheme(options))
