import React from 'react'
import {Redirect} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import {Alert} from '@material-ui/lab'
import {IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'

let useStyle=makeStyles((theme)=>({
	root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    	},
  	},
}))

export default class Error extends React.Component{

	constructor(props){
		super(props)
		this.state={tayang:true, dash:localStorage.getItem('sesi')}
	}

	ditutup=()=>{
		this.setState({tayang:false})
	}

	render(){
		let {tayang,dash}=this.state
		let classes=useStyle()
		if (tayang)return <div className={classes.root}>
				<Alert action={<IconButton aria-label='close' color='inherit' size='small'
				onClick={this.ditutup}><Close fontSize='inherit'/></IconButton>}>404 Not Found</Alert>
			</div>
		else {
			if(dash)return <Redirect to="/dash"/>
			else return <Redirect to="/"/>
		}
	}

}