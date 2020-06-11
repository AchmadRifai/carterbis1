import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Grid, Typography, Link} from '@material-ui/core'
import * as datas from '../data/datas'

let useStyle=makeStyles(theme=>({
	heroContent: {
    	backgroundColor: theme.palette.background.paper,
    	padding: theme.spacing(8, 0, 6),
  	},
  	heroButtons: {
    	marginTop: 4*8,
  	},
}))

export default function PahlawanCP(props){
	let gaya=useStyle()
	return <div className={gaya.heroContent}>
		<Container maxWidth='sm'>
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {datas.cpKepala.kepala.compName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Kami menyediakan penyewaan Berbagai jenis mobil
            </Typography>
		</Container>
		<div className={gaya.heroButtons}>
			<Grid container spacing={2} justify='center'>
				<Grid item>
					<Link variant='button contained' color='primary' component={RouterLink}
 to='/cars'>Cek Mobil Sekarang</Link>
				</Grid>
				<Grid item>
					<Link variant='button outlined' color='primary' component={RouterLink}
 to='/about'>Jelajahi Dulu</Link>
				</Grid>
			</Grid>
		</div>
	</div>
}