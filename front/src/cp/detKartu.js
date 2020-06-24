import React, {useRef,useState} from 'react'
import {CardActions, Button, Dialog, DialogTitle, DialogActions, DialogContent, 
DialogContentText} from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import DelBtn from './delBtn'

export default function DetMobilDial(props) {
	let{item,admin}=props,[open,setOpen]=useState(false),descriptionElementRef=useRef(null)
	let titleId='judul'+item.id,kontenId='konten'+item.id,galery=[{
original:'https://arcane-ridge-61456.herokuapp.com/img/mobil/depan/'+item.id,
thumbnail:'https://arcane-ridge-61456.herokuapp.com/img/mobil/depan/'+item.id},
{
original:'https://arcane-ridge-61456.herokuapp.com/img/mobil/kanan/'+item.id,
thumbnail:'https://arcane-ridge-61456.herokuapp.com/img/mobil/kanan/'+item.id},
{
original:'https://arcane-ridge-61456.herokuapp.com/img/mobil/belakang/'+item.id,
thumbnail:'https://arcane-ridge-61456.herokuapp.com/img/mobil/belakang/'+item.id},
{
original:'https://arcane-ridge-61456.herokuapp.com/img/mobil/kiri/'+item.id,
thumbnail:'https://arcane-ridge-61456.herokuapp.com/img/mobil/kiri/'+item.id}]
	React.useEffect(()=>{
		if(open){
			let { current: descriptionElement } = descriptionElementRef
			if(descriptionElement!==null)descriptionElement.focus()
		}
	},[open])
	return<CardActions>
		{admin?'':
<Button size="small" color="primary" target='_blank' href='https://wa.me/08708347842'>Pesan</Button>}
		<Button size="small" color="primary" onClick={()=>setOpen(true)}>Lihat</Button>
		<Dialog open={open} scroll='paper' onClose={()=>setOpen(false)} aria-labelledby={titleId}>
			<DialogTitle id={titleId}>{item.merk}</DialogTitle>
			<DialogContent dividers><DialogContentText id={kontenId} ref={descriptionElementRef}>
				<ImageGallery items={galery} showFullscreenButton={false} showPlayButton={false}/>
			</DialogContentText></DialogContent>
			{admin?<DialogActions>
				<DelBtn nomor={item.id} merk={item.merk}/>
			</DialogActions>:''}
		</Dialog>
	</CardActions>
}