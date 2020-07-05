import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Container, CircularProgress, Grid, Typography, Card, CardMedia, CardContent, CardActions} from '@material-ui/core'

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

export default function DataMitra(props) {
	let gaya=useStyle(),{admin}=props,[m,setM]=React.useState([]),[l,setL]=React.useState(true)
	fetch('https://arcane-ridge-61456.herokuapp.com/mitras').then(r=>{if(r.status===200)return r.json()})
.then(d=>{
	setM(d)
	setL(false)
})
	return<Container className={gaya.cardGrid} maxWidth='md'>
<Typography gutterBottom variant='h4' align='center'>Para Mitra</Typography>
	{l?<CircularProgress/>:<Grid container spacing={4}>
{m.map(i=>{
	let img='https://arcane-ridge-61456.herokuapp.com/img/mitra/'+i.id
	return<Grid item key={i} xs={12} sm={6} md={4}>
		<Card className={gaya.card}>
			<CardMedia image={img} className={gaya.cardMedia}/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">{i.nm}</Typography>
				{admin?<Typography>{i.createdAt}</Typography>:''}
			</CardContent>
			{admin?<CardActions></CardActions>:''}
		</Card>
	</Grid>
})}
	</Grid>}
	</Container>
}