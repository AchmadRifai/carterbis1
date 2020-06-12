import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import {Alert} from '@material-ui/lab'
import {IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'

let useStyle=makeStyles((theme)=>({
	root: {
    width: '100%',
    '& > * + *': {
      marginTop: 2*8,
    	},
  	},
}))

export default function Error(){
	let [tayang,setTayang]=useState(true)
	let [dash]=useState(localStorage.getItem('sesi'))

	let ditutup=()=>{
		setTayang(false)
	}

	let classes=useStyle()
	if (tayang)return <div className={classes.root}>
			<Alert action={
				<IconButton aria-label='close' color='inherit' size='small'
			onClick={ditutup}>
					<Close fontSize='inherit'/>
				</IconButton>} color='error' severity='error'>404 Not Found
			</Alert>
		</div>
	else {
		if(dash)return <Redirect to="/dash"/>
		else return <Redirect to="/"/>
	}
}
