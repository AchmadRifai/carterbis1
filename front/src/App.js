import React from 'react'
import {CssBaseline, Container, Grid, CardMedia, Card, CardContent, Typography, CardActions, Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import * as cp from './cp/bundel'
import * as conf from './data/datas'

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

export default function App(props){
	let gaya=useStyle()
	return <React.Fragment>
		<CssBaseline/>
		<cp.ElevationScroll {...props}><cp.Kepala conf={conf.cpKepala.kepala}/></cp.ElevationScroll>
		<main>
			<cp.PahlawanCP/>
			<Container className={gaya.cardGrid} maxWidth='md'>
				<Grid container spacing={4}>
				{conf.mobil3CP.map(i1=>{
					return <Grid item key={i1} xs={12} sm={6} md={4}>
						<Card className={gaya.card}>
							<CardMedia className={gaya.cardMedia} image={i1.gbr}/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">{i1.nm}</Typography>
								<Typography>{i1.hrg} per hari</Typography>
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
		</main>
		<cp.Kaki isi={conf.cpKaki.kaki}/>
	</React.Fragment>
}