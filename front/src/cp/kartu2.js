import {Container, Grid, CardMedia, Card, CardContent, Typography, 
CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Uang from '../uang'
import DetMobilDial from './detKartu'

let useStyle=makeStyles(theme=>({
	cardGrid: {
    	paddingTop: 8*8,
    	paddingBottom: 8*8,
  	},
  	card: {
    	height: '100%',
    	display: 'flex',
    	flexDirection: 'column',
  	},
  	cardMedia: {
    	paddingTop: '56.25%', // 16:9
  	},
  	cardContent: {
    	flexGrow: 1,
  	},
}))

export default function Kartu2(props) {
	let gaya=useStyle(),{batasi,admin}=props,[mobil2,setMobil2]=React.useState([])
	let[load,setLoad]=React.useState(true)
	fetch('https://arcane-ridge-61456.herokuapp.com/mobils').then(r=>{if(r.status===200)return r.json()})
.then(d=>{
	if(batasi)setMobil2(d.slice(0,3))
	else setMobil2(d)
	setLoad(false)
})
	return <Container className={gaya.cardGrid} maxWidth='md'>
		{load?<CircularProgress/>:<Grid container spacing={4}>
		{mobil2.map(i=>{
			let img='https://arcane-ridge-61456.herokuapp.com/img/mobil/depan/'+i.id
			return <Grid item key={i} xs={12} sm={6} md={4}>
				<Card className={gaya.card}>
					<CardMedia className={gaya.cardMedia} image={img}/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">{i.merk}</Typography>
						<Typography><Uang nilai={i.hrg}/> per hari</Typography>
					</CardContent>
					<DetMobilDial admin={admin} item={i}/>
				</Card>
			</Grid>
		})}
		</Grid>}
	</Container>
}