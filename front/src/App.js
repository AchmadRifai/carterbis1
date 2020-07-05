import React from 'react'
import {CssBaseline} from '@material-ui/core'
import * as cp from './cp/bundel'
import * as conf from './data/datas'
import DataPeg from './peg/data-peg'
import DataMitra from './mitra/data-mitra'

export default function App(props){
	return <React.Fragment> 
		<CssBaseline/>
		<cp.ElevationScroll {...props}><cp.Kepala conf={conf.cpKepala.kepala}/></cp.ElevationScroll>
		<main>
			<cp.PahlawanCP/>
			<cp.Kartu2 batasi admin={false}/>
			<DataPeg batasi admin={false}/>
			<DataMitra/>
		</main>
		<cp.Kaki isi={conf.cpKaki.kaki}/>
	</React.Fragment>
}