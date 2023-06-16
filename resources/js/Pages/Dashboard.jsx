import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBoxOpen, faTruck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard({ auth }) {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [orderPending, setOrderPending] = useState(0);
  const [orderDelivered, setOrderDelivered] = useState(0);

  useEffect(() => {
    axios
      .get('/dashboard-data')
      .then(response => {
        const { totalProducts, totalCustomers, orderPending, orderDelivered } = response.data;
        setTotalProducts(totalProducts);
        setTotalCustomers(totalCustomers);
        setOrderPending(orderPending);
        setOrderDelivered(orderDelivered);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard">
        <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
      </Head>

      <div className="py-12 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-white">
            <h3 className="text-4xl font-semibold mb-2">Welcome to the E-commerce Dashboard!</h3>
            <p className="text-xl">
              This dashboard provides you with an overview of your e-commerce store's key metrics and performance.
              Below, you'll find important information about your customers, products, and order status.
            </p>
          </div>
        </div>
      </div>


      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-500 rounded-lg overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-6xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Total Customers</h3>
              <p className="text-4xl font-bold text-white">{totalCustomers}</p>
            </div>
            <div className="bg-purple-500 rounded-lg overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faBoxOpen} className="text-6xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Total Products</h3>
              <p className="text-4xl font-bold text-white">{totalProducts}</p>
            </div>
            <div className="bg-green-500 rounded-lg overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faTruck} className="text-6xl text-white" />
                <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-white ml-4" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Total Orders</h3>
              <div className="flex">
                <div className="mr-8">
                  <h4 className="text-xl font-semibold text-white">Order Pending</h4>
                  <p className="text-4xl font-bold text-white">{orderPending}</p>
                </div>
                <div className="ml-auto">
                  <h4 className="text-xl font-semibold text-white">Order Delivered</h4>
                  <p className="text-4xl font-bold text-white">{orderDelivered}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
