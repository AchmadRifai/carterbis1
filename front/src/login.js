import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import * as cp from './cp/bundel'
import {Redirect} from 'react-router-dom'
import {Container, CssBaseline, Box, Avatar, Typography, TextField, Button} from '@material-ui/core'
import {LockOutlined} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 8*8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 8,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 8,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login(props) {
	let gaya=useStyles(),[sesi,setSesi]=React.useState(localStorage.getItem('sesi'))
	let[user,setUser]=React.useState(''),[pass,setPass]=React.useState('')
	let[stun,setStun]=React.useState(false)
	let userChange=e=>{setUser(e.target.value)},passChange=e=>{setPass(e.target.value)}
	let go=()=>{
		setStun(true)
		let data={pass,user,tgl:new Date()}
		fetch('https://arcane-ridge-61456.herokuapp.com/logins',{method:'POST',body:JSON.stringify(data)})
.then(r=>{if(r.status===200)return r.json()}).then(o=>{
	if(o.msg==='sukses'){
		localStorage.setItem('sesi',JSON.stringify(o))
		setSesi(localStorage.getItem('sesi'))
	} setStun(false)
	setUser('')
	setPass('')
}).catch(e=>{
	setStun(false)
	setUser('')
	setPass('')
})
	}
	if(!sesi)return <Container component="main" maxWidth="xs">
		<CssBaseline/>
		<div className={gaya.paper}>
			<Avatar className={gaya.avatar}><LockOutlined/></Avatar>
			<Typography component='h1' variant='h5'>Sign In</Typography>
			<form className={gaya.form} noValidate>
				<TextField variant="outlined" margin="normal" required fullWidth  label="Akun" 
autoFocus value={user} onChange={userChange} disabled={stun}/>
				<TextField variant="outlined" margin="normal" required fullWidth label="Password"
type="password" autoComplete="current-password" value={pass} onChange={passChange} disabled={stun}/>
				<Button type="submit" fullWidth variant="contained" color="primary"
onClick={go} disabled={stun}>Sign In</Button>
			</form>
		</div>
		<Box mt={8}><cp.TandaTangan/></Box>
	</Container>
	else return <Redirect to='/dash'/>
}