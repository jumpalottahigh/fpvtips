import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0375d8' }, // Darker blue - #0375d8; Lighter blue - #308edf
    secondary: { main: '#000' },
  },
})

function Palette({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default Palette
