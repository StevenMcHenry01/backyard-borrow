// 3rd party imports
import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

// My imports
import { Routes } from './routes'
import { lightTheme } from './theme'

const App = () => {
  // const [darkThemeActivated, setDarkThemeActivated] = React.useState(false)
  // const handleThemeToggle = () => {
  //   setDarkThemeActivated(!darkThemeActivated)
  // }
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App

// STYLING
