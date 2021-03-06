import React, {useState} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Link, IconButton,CircularProgress} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

let useStyle=makeStyles((theme)=>({
	icon:{
		marginRight: theme.spacing(2),
	},
	appBar: {
    	borderBottom: `1px solid ${theme.palette.divider}`,
  	},
	toolbar: {
    	flexWrap: 'wrap',
  	},
  	toolbarTitle: {
    	flexGrow: 1,
  	},
  	link: {
    	margin: theme.spacing(1, 1.5),
  	},
	menuButton: {
    	marginRight: theme.spacing(2),
  	},
}))

export default function Kepala(props){
	let classes=useStyle(),{conf}=props,[nm,setNm]=useState(''),[muat,setMuat]=useState(true)
	fetch('https://arcane-ridge-61456.herokuapp.com/comp').then(r=>{
		if(r.status===200)return r.json()
	}).then(d=>{
		setNm(d.nm)
		setMuat(false)
	})
	return <AppBar elevation={0} className={classes.appBar}>
		<Toolbar className={classes.toolbar}>
			<IconButton className={classes.menuButton} aria-label='menu' edge='start' color='inherit'>
				<MenuIcon/>
			</IconButton>
			<Typography noWrap variant='h6' color='inherit' className={classes.toolbarTitle}>
				{muat?<CircularProgress color='inherit'/>:nm}
			</Typography>
			<nav>
			{conf.menune.map(i1=>{
				return<Link component={RouterLink} to={i1.menuju} color='inherit' variant='button'
 					className={classes.link}>
						{i1.teks}
					</Link>
			})}
			</nav>
		</Toolbar>
	</AppBar>
}