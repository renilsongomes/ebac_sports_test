import React from 'react'
import Header from './components/Header'
import Produtos from './containers/produtos'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
