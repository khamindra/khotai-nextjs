import React from 'react'
import Title from './Title'

const HomeBanner = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-5'>
			<Title className='text-4xl md:text-4xl uppercase font-bold text-center'>
				Best Shan Clothing Collection
			</Title>
			<div>
				<h1 className='text-xl text-center mx-auto font-bold'>
					KHOTAI ႁၢၼ်ႉၵႃႉၶၢႆ e-commerce တႃႇပီႈၼွင်ႉႁဝ်းၶဝ် ၼႂ်းလူၵ်ႈ
					Online
				</h1>
			</div>
			<p className='text-sm text-center text-lightColor/80 font-medium max-w-[480px]'>
				Find eveything modern Shan clothings and casual wears you
				need, and shop with confidence to meet your flavor and
				lifestyle
			</p>
			<p className='text-sm text-center text-lightColor/80 font-medium max-w-[480px]'>
				ၶူဝ်းၼုင်ႈတၢင်းဝႆတႆး ပၢၼ်မႂ်ႇ ယိင်း-ၸၢႆး လဵၵ်ႉယႂ်ႇၼုမ်ႇထဝ်ႈ
				သၢမ်ပၢၼ်ၸဵတ်းသႅၼ်း မီးၶၢႆၵူႈသႅၼ်း၊ သင်ႇၽၢၼ်ႇ KHOTAI Online
				လႆႈၵူႈၶၢဝ်းဢေႃႈ
			</p>
		</div>
	)
}

export default HomeBanner
