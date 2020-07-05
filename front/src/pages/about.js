import React from 'react'
import {CssBaseline, Grid, CircularProgress, Paper, Typography} from '@material-ui/core'
import * as conf from '../data/datas'
import Kepala from '../cp/kepala'
import {ElevationScroll, Kaki} from '../cp/bundel'

export default function Abouts(props) {
	let[m,setM]=React.useState(true),[i,setI]=React.useState({nm:'',tlp:'',email:'',wa:'',moto:''})
	fetch('https://arcane-ridge-61456.herokuapp.com/comp').then(r=>{if(r.status===200)return r.json()})
.then(d=>{
	setI(d)
	setM(false)
})
	return<React.Fragment>
		<CssBaseline/>
		<ElevationScroll {...props}><Kepala conf={conf.cpKepala.kepala}/></ElevationScroll>
		<main>
			{m?<CircularProgress/>:<Grid container direction='column' justify='center' alignItems='center' 
spacing={3}>
	<Grid item>
		<Paper>
			<Typography variant='h4' gutterBottom>{i.nm}</Typography>
			<Typography variant='subtitle2' gutterBottom>{i.email}</Typography>
			<Typography variant='h6' gutterBottom>{i.tlp}</Typography>
			<Typography variant='body2' gutterBottom>{i.moto}</Typography>
		</Paper>
	</Grid>
			</Grid>}
		</main>
		<Kaki conf={conf.cpKaki.kaki}/>
	</React.Fragment>
}