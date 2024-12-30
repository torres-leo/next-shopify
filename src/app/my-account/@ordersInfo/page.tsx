import { getCustomerOrders } from '@/services/shopify/graphql/customer';

export default async function MyAccountPage() {
	const ordersInfo = await getCustomerOrders();
	return (
		<section>
			<h2>Orders</h2>
			<div className='flex flex-wrap gap-5'>
				{ordersInfo.orders?.map((order) => (
					<div key={order.id}>
						<p>Order Number: {order.orderNumber}</p>
						<p>Customer: {order.email}</p>
						<p>Customer: {order.phone}</p>
					</div>
				))}
			</div>
		</section>
	);
}
