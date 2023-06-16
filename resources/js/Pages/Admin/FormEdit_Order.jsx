import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { Inertia } from '@inertiajs/inertia';

export default function Form_Product({ auth ,order  }) {
  const { data, setData, put } = useForm({
    status: order.status,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('order.update', order.id), {
      onSuccess: () => {
        // Handle success, e.g., show a success message
        alert('Order status updated successfully!');        
      },
    });
    Inertia.visit(route('order.view', { id: order.id }));
  };



  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-info p-5 rounded-md">Order</h2>}
      >
        <h2 className="h2_style">Edit Order</h2>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Status:</label>
        <select
          value={data.status}
          onChange={(e) => setData('status', e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Update Status</button>
      </div>
    </form>
      </AuthenticatedLayout>
      <style>{`
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

        label {
          display: inline-block;
          width: 200px;
          padding-bottom: 30px;
          text-align: left;
          left: 0;
        }

        #hidden {
          display: none;
        }

        tbody[aria-status="Delivered"] {
          background-color: lightgray;
        }
      `}</style>
    </>
  );
}
