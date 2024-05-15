import React from 'react'
import './App.css'
import GroupBlock from './components/GroupBlock'
import Checkbox from './components/Checkbox'

const App = ({ studentsArray, groupArray, statArray }) => {
	return (
		<div className='MainContainer'>
			<GroupBlock groupArray={groupArray} studentsArray={studentsArray} />
			<Checkbox statArray={statArray} />
		</div>
	)
}

export default App
