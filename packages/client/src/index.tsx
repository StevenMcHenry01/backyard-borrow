// 3rd party imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'
import App from './app'


// my imports
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
