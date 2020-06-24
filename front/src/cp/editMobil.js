import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Button, Dialog, DialogTitle, DialogActions, DialogContent
} from '@material-ui/core'

export default function EditMobil(props) {
	let{item}=props,[tayang,setTayang]=useState(false),[reload,setReload]=useState(false)
	if(!reload)return<div>
		<Button color='primary' onClick={()=>setTayang(true)}>Edit</Button>
		<Dialog open={tayang} onClose={()=>setTayang(false)}>
			<DialogTitle>Edit Mobil {item.merk}</DialogTitle>
			<DialogContent></DialogContent>
			<DialogActions></DialogActions>
		</Dialog>
	</div>
	else return<Redirect to={window.location.pathname}/>
}