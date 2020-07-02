import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, CircularProgress, Grid, Card, CardMedia, CardContent, Typography
} from '@material-ui/core'
import DetPeg from './det-peg'

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

export default function DataPeg(prop) {
	let gaya=useStyle(),{batasi,admin}=prop,[peg,setPeg]=React.useState([]),[m,setM]=React.useState(true)
	fetch('https://arcane-ridge-61456.herokuapp.com/pegawai').then(r=>{if(r.status===200)return r.json()})
.then(l=>{
	if(batasi)setPeg(l.slice(0,6))
	else setPeg(l)
	setM(false)
})
	return<Container className={gaya.cardGrid} maxWidth='md'>
	{m?<CircularProgress/>:<Grid container spacing={4}>
	{peg.map(i=>{
		let img='https://arcane-ridge-61456.herokuapp.com/pegawai/img/'+i.id
		return<Grid item key={i} xs={12} sm={6} md={4}>
			<Card className={gaya.card}>
				<CardMedia image={img} className={gaya.cardMedia}/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">{i.nm}</Typography>
					<Typography>{i.almt}</Typography>
				</CardContent>
				<DetPeg item={i} admin={admin}/>
			</Card>
		</Grid>
	})}
	</Grid>}
	</Container>
}