import { requiredUser } from '@/hooks/requiredUser'
import React from 'react'

const OrdersPage = async () => {
	await requiredUser()

	return <div>Your Orders here:</div>
}

export default OrdersPage
