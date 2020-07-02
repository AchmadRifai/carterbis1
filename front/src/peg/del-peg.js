import React from 'react'
import {Redirect} from 'react-router-dom'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, 
DialogContentText} from '@material-ui/core'

export default function DelPeg(props) {
	let{no,nm}=props,[r,setR]=React.useState(false),[m,setM]=React.useState(false),hapus=()=>{
fetch('https://arcane-ridge-61456.herokuapp.com/pegawai/del',{method:'POST',body:JSON.stringify({id:no})})
.then(r=>{if(r.status===200)return r.json()}).then(m=>{
	if(m.msg)setR(true)
	setM(false)
})
	}
	if(r)return<Redirect to={window.location.pathname}/>
	else return<div>
		<Button color='secondary' onClick={()=>setM(true)}>HAPUS</Button>
		<Dialog open={m} onClose={()=>setM(false)}>
			<DialogTitle>Hapus Pegawai</DialogTitle>
			<DialogContent>
				<DialogContentText>Apa anda ingin menghapus data pegawai {nm}?</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button size='small' onClick={()=>setM(false)}>Batal</Button>
				<Button color='secondary' size='small' onClick={hapus}>Hapus</Button>
			</DialogActions>
		</Dialog>
	</div>
}