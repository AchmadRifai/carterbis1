import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Box, Typography, Link, Grid} from '@material-ui/core'
import TandaTangan from './copyright'

let useStyle=makeStyles((theme)=>({
	footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      		paddingTop: theme.spacing(6),
      		paddingBottom: theme.spacing(6),
    	},
  	},
	'@global': {
    	ul: {
      		margin: 0,
      		padding: 0,
      		listStyle: 'none',
    	},
  	},
}))

export default function Kaki(props){
	let gaya=useStyle(),{isi}=props
		return <Container className={gaya.footer} component='footer' maxWidth='md'>
			<Grid container spacing={4} justify='space-evenly'>
			{isi.map((iki)=>{
				return <Grid xs={6} sm={3} item>
					<Typography gutterBottom variant='h6' color='textPrimary'>{iki.judul}</Typography>
					<ul>
					{iki.desk.map((siji)=>{
						return <li>
							<Link component={RouterLink} to={siji.menuju} variant='subtitle1' 
							color='textSecondary'>
								{siji.item}
							</Link>
						</li>
					})}
					</ul>
				</Grid>
			})}
			</Grid>
			<Box mt={5}><TandaTangan/></Box>
		</Container>
}