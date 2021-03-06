import { createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        // @ts-ignore
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'sans-serif',
        ],
    },
    palette: {
        primary: {
            main: '#e0245e',
            dark: 'rgb(26, 145, 218)',
            contrastText: '#fff',
        },

        secondary: {
            main: 'rgb(26, 145, 218)',
        },

        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    // @ts-ignore
    shadows: [],
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: '#e0245e',
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px',
                },
            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)',
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204, 214, 221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
})

export default theme
