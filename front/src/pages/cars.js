import React from 'react'
import {CssBaseline} from '@material-ui/core'
import * as cp from '../cp/bundel'
import * as conf from '../data/datas'

export default function Cars(props) {
	return<React.Fragment>
		<CssBaseline/>
		<cp.ElevationScroll {...props}><cp.Kepala conf={conf.cpKepala.kepala}/></cp.ElevationScroll>
		<main>
			<cp.Kartu2/>
		</main>
		<cp.Kaki isi={conf.cpKaki.kaki}/>
	</React.Fragment>
}