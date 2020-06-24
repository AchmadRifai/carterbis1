import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'

export default function DelBtn(props) {
	let{nomor,merk}=props,[reload,setReload]=useState(false),[tayang,setTayang]=useState(false),hapus=()=>{
		fetch('https://arcane-ridge-61456.herokuapp.com/mobil/del',{method:'POST',
body:JSON.stringify({id:nomor})}).then(r=>{if(r.status===200)return r.json()}).then(h=>{
	if(h.id===nomor)setReload(true)
	setTayang(false)
})
	}
	if(!reload)return<div>
		<Button color='secondary' onClick={()=>setTayang(true)}>HAPUS</Button>
		<Dialog open={tayang} onClose={()=>setTayang(false)}>
			<DialogTitle>Hapus Data Mobil {nomor}</DialogTitle>
			<DialogContent>
				<DialogContentText>Apa anda benar - benar ingin menghapus Mobil Merk {merk} ?
</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={()=>setTayang(false)} size='small'>Batal</Button>
				<Button onClick={hapus} color='secondary' size='small'>Hapus</Button>
			</DialogActions>
		</Dialog>
	</div>
	else return<Redirect to={window.location.pathname}/>
}