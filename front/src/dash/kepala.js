import React,{useState} from 'react'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/styles'
import {AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List} from '@material-ui/core'
import { Menu, ChevronLeft } from '@material-ui/icons'

let useStyle=makeStyles(theme=>({
	title: {
    	flexGrow: 1,
  	},
	appBar: {
    	zIndex: theme.zIndex.drawer + 1,
    	transition: theme.transitions.create(['width', 'margin'], {
      		easing: theme.transitions.easing.sharp,
      		duration: theme.transitions.duration.leavingScreen,
    	}),
  	},
  	appBarShift: {
    	marginLeft: drawerWidth,
    	width: `calc(100% - ${drawerWidth}px)`,
    	transition: theme.transitions.create(['width', 'margin'], {
      		easing: theme.transitions.easing.sharp,
      		duration: theme.transitions.duration.enteringScreen,
    	}),
  	},
	toolbar: {
    	paddingRight: 24, // keep right padding when drawer closed
  	},
	menuButton: {
    	marginRight: 36,
  	},
  	menuButtonHidden: {
    	display: 'none',
  	},
	toolbarIcon: {
    	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'flex-end',
    	padding: '0 8px',
    	...theme.mixins.toolbar,
  	},
}))

function MainMenune(props) {
	let{pilih}=props
	return<div></div>
}

export default function Kepala(props) {
	let gaya=useStyle(),[open,setOpen]=useState(true)
	return<div>
		<AppBar position='absolute' className={clsx(gaya.appBar,open&&gaya.appBarShift)}>
			<Toolbar className={gaya.toolbar}>
				<IconButton edge='start' color='inherit' onClick={()=>setOpen(true)} 
className={clsx(gaya.menuButton,open&&gaya.menuButtonHidden)}><Menu/></IconButton>
			<Typography component='h1' variant='h6' color='inherit' noWrap 
className={gaya.title}>Admin Panel</Typography>
			</Toolbar>
			<Drawer variant='permanent' open={open} 
classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),}}>
				<div className={gaya.toolbarIcon}>
					<IconButton onClick={()=>setOpen(false)}><ChevronLeft/></IconButton>
				</div>
				<Divider/>
				<List>{MainMenune}</List>
				<Divider/>
				<List></List>
			</Drawer>
		</AppBar>
	</div>
}