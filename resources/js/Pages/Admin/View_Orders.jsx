import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function View_Orders({ auth }) {
  const { orders , commandes } = usePage().props;

  const downloadOrderData = (orderId) => {
    const selectedCommande = commandes.find((commande) => commande.order_id === orderId);
    if (selectedCommande) {
      const commandeData = JSON.stringify(selectedCommande, null, 2);
      const blob = new Blob([commandeData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `commande_${orderId}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
  

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-primary p-5 rounded-md">Orders</h2>}
      >
        <Head title="Orders" />
        <div className="overflow-x">
                <table className="table table-zebra w-full"style={{width:"1500px" , margin: "0 auto", textAlign: "center"}}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Payment Method</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders &&
              orders.map((order) => (
                <tbody key={order.id}>
                  <tr>
                    <td>{order.id}</td>
                    <td className="text-indigo-600 font-bold">{order.PaymentMethod}</td>
                    <td className="text-indigo-400">{order.OrderDate}</td>
                    <td className="text-indigo-400">{order.DeliveryDate}</td>
                    <td>
                      <span className="text-indigo-600 font-bold">{order.total}</span> DH
                    </td>
                    <td id='status'>{order.status}</td>
                    <td>
                      <a
                        className="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg"
                        href={route('order.form_edit', order.id)}
                      >
                        Update
                      </a>

                      <InertiaLink
                        href={route('order.delete', order.id)}
                        method="delete"
                        as="button"
                        className="bg-red-300 p-3 ml-5 hover:bg-red-400 rounded-lg"
                        type="button"
                        onClick={() => {
                          confirm('Are you sure?');
                        }}
                      >
                        Delete
                      </InertiaLink>

                      <button
                        className="bg-blue-300 p-3 ml-5 hover:bg-blue-400 rounded-lg"
                        type="button"
                        onClick={() => downloadOrderData(order.id)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </AuthenticatedLayout>
      <style>
        {`
        .div_center {
          text-align: center;
          padding-top: 40px;
      }

      .h2_style {
          font-size: 40px;
          padding-bottom: 40px;
      }

      #input_color {
          color: black;
      }
      #status{
        text-transform: uppercase;
      }
        `}
      </style>
    </>
  );
}
