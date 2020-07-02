import React from 'react'
import {CardActions, Button, Dialog, DialogContent, DialogContentText, DialogActions} from '@material-ui/core'

export default function DetPeg(props) {
	let{item,admin}=props,wa='https://wa.me/'+item.tlp,[m,setM]=React.useState(false)
	let titleId='judul'+item.id,kontenId='konten'+item.id,der=React.useRef(null)
	React.useEffect(()=>{
		if(m){
			let{current:de}=der
			if(de!==null)de.focus()
		}
	},[m])
	return<CardActions>
		{admin?'':<Button size="small" color="primary" target='_blank' href={wa}>WA</Button>}
		<Button size="small" color="primary" onClick={()=>setM(true)}>Detail</Button>
		<Dialog open={m} scroll='paper' onClose={()=>setM(false)} aria-labelledby={titleId} 
aria-describedby={kontenId}>
			<DialogTitle id={titleId}>{item.nm}</DialogTitle>
			<DialogContent dividers>
				<DialogContentText id={kontentId} ref={der}>
					<div>{item.almt}</div>
					<div>{item.tlp}</div>
				</DialogContentText>
			</DialogContent>
			{admin?<DialogActions>
			</DialogActions>:''}
		</Dialog>
	</CardActions>
}