import React from 'react'
import {CssBaseline} from '@material-ui/core'
import * as cp from '../cp/bundel'
import * as conf from '../data/datas'
import DataMitra from '../mitra/data-mitra'

export default function SupportBy(props) {
	return<React.Fragment>
		<CssBaseline/>
		<cp.ElevationScroll {...props}><cp.Kepala conf={conf.cpKepala.kepala}/></cp.ElevationScroll>
		<main><DataMitra/></main>
		<cp.Kaki/>
	</React.Fragment>
}