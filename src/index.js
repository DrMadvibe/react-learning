import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/templates/Home'
import About from './components/templates/About'
import Contact from './components/templates/Contact'

function App() {
    return(
        <>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
            </Switch>
        </>
    )
}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
)