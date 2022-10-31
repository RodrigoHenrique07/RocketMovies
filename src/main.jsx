import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './style/theme'
import GlobalStyle from './style/Global'


import {Profile} from './page/Profile'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>

      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
