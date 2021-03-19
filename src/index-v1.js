import React from 'react'
import {render} from 'react-dom'
import Heading from "./components/atoms/heading/Heading"
import Button from './components/atoms/button/Button'
import Link from './components/atoms/link/Link'
import Search from './components/molecules/search/Search'
import Counter from './components/molecules/counter2/Counter2'
import Data from './components/molecules/data/Data'

function showAlert() {
	alert("Hello")
}

function drinkAlert() {
	alert("Glug")
}

function App() {
	return(
		<>
			<Heading className="heading" name="Big Dave" />
			<p>Here is a link to <Link href="https://www.google.co.uk" target="_blank">Google</Link></p>

			<Button onClick={showAlert}>Eat me</Button>
			<Button onClick={drinkAlert}>Drink me</Button>

			<Search />
			<Counter />
			<Data />
		</>
	)
}

render(
	<App />,
	document.getElementById('app')
)