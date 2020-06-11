import React from 'react'
import {Typography, Link} from '@material-ui/core'

export default function TandaTangan(){
	return <Typography variant='body2' color='textSecondary' align='center'>
		{'Copyright © '}
		<Link color='inherit' href='#'>{'Our Website'}</Link>
		{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
}