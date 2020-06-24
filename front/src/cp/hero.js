import React,{useState} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Grid, Typography, Button, CircularProgress} from '@material-ui/core'

let useStyle=makeStyles(theme=>({
	heroContent: {
    	backgroundColor: theme.palette.background.paper,
    	padding: theme.spacing(8, 0, 6),
  	},
  	heroButtons: {
    	marginTop: 4*8,
  	},
}))

export default function PahlawanCP(){
	let gaya=useStyle(),[tayang,setTayang]=useState(true),[nm,setNm]=useState(''),[moto,setMoto]=useState('')
	fetch('https://arcane-ridge-61456.herokuapp.com/comp').then(r=>{
		if(r.status===200)return r.json()
	}).then(d=>{
		setNm(d.nm)
		setMoto(d.moto)
		setTayang(false)
	})
	return <div className={gaya.heroContent}>
		{tayang?<CircularProgress/>:<Container maxWidth='sm'>
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {nm}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {moto}
            </Typography>
		</Container>}
		<div className={gaya.heroButtons}>
			{tayang?<div></div>:<Grid container spacing={2} justify='center'>
				<Grid item>
					<Button variant='contained' color='primary' component={RouterLink}
 to='/cars'>Cek Mobil Sekarang</Button>
				</Grid>
				<Grid item>
					<Button variant='outlined' color='primary' component={RouterLink}
 to='/about'>Jelajahi Dulu</Button>
				</Grid>
			</Grid>}
		</div>
	</div>
}