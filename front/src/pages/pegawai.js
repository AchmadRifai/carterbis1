import React from 'react'
import {CssBaseline} from '@material-ui/core'
import * as cp from '../cp/bundel'
import * as data from '../data/datas'
import DataPeg from '../peg/data-peg'

export default function Pegawais(props) {
	return<React.Fragment>
		<CssBaseline/>
		<cp.ElevationScroll {...props}><cp.Kepala conf={data.cpKepala.kepala}/></cp.ElevationScroll>
		<main>
			<DataPeg/>
		</main>
		<cp.Kaki conf={data.cpKaki.kaki}/>
	</React.Fragment>
}