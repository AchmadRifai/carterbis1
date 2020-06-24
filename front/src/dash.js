import React from 'react'
import {makeStyles} from '@material-ui/styles'

let useStyle=makeStyles(theme=>({
	root: {
    	display: 'flex',
 	},
}))

export default function Dash(props) {
	let gaya=useStyle()
	return <div className={gaya.root}></div>
}