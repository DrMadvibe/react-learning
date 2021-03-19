import React from 'react'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'

const Search = () => {

	return (
		<>
			<div className="m-search">
				<Label htmlFor="search-me">Looking for something?</Label>
				<Input id="searchMe" className="m-search__input" name="search-me" type="search" />
				<Button className="m-search__button">Trust me. I can help you find it</Button>
			</div>
		</>
	)
}

export default Search