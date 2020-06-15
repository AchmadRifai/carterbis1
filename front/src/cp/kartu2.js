import {Container, Grid, CardMedia, Card, CardContent, Typography, CardActions, Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Uang from '../uang'

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
	let gaya=useStyle(),{mobil2}=props
	return <Container className={gaya.cardGrid} maxWidth='md'>
		<Grid container spacing={4}>
		{mobil2.map(i=>{
			return <Grid item key={i} xs={12} sm={6} md={4}>
				<Card className={gaya.card}>
					<CardMedia className={gaya.cardMedia} image={i.gbr}/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">{i.nm}</Typography>
						<Typography><Uang nilai={i.hrg}/> per hari</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">Pesan</Button>
						<Button size="small" color="primary">Lihat</Button>
					</CardActions>
				</Card>
			</Grid>
		})}
		</Grid>
	</Container>
}