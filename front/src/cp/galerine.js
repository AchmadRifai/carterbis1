import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss'

export default function Galerine(props) {
	let {isi}=props
	return <AwesomeSlider cssModule={AwsSliderStyles}>
	{isi.map(i=>{
		return<div data-src={i}/>
	})}
	</AwesomeSlider>
}