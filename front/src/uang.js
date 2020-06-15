import React from 'react'

let radix=(v)=>{
	let r=0,b=parseInt(v)
	while(b>0){
		b/=10
		r+=1
	} return r
}

let conv=(v)=>{
	let r='Rp',d=parseInt(v),a=','
	if(d!==0){
		while(d>=1){
			let s=parseInt(d%1000)
			let rad=radix(s)
			let p=''
			if(rad===1||rad===0)p='.00'
			else if(rad===2)p='.0'
			a=p+s+a
			d=d/1000
		}
	} else a=d+a
	r=r+a
	return r
}

export default function Uang(props){
	let {nilai}=props
	let out=conv(nilai)
	return <span>{out}</span>
}