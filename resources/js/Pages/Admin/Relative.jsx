import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Show_Product({auth}) {
    const { products, category } = usePage().props;
    return (
        <AuthenticatedLayout user={auth.user}>
            <base href="/public"></base>
            <a href="/Admincategories" className="inline-flex items-center text-blue-500 hover:text-blue-700" style={{ marginTop:'50px' }}>
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              <span>Return</span>
            </a>
            <div className="overflow-x-auto" >
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                        <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                           <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                            {
                                products.map((product) => (
                                    <tbody>
                            <tr>
                                <td><img width="130px" height="200px" src={'products/'+product.image} alt="oso"/></td>
                                <td>{ product.title }</td>
                                <td style={{maxWidth:"400px",whiteSpace: "pre-line"}}>{ product.description }</td>
                                <td>{ category }</td>
                                <td>{ product.price }DH</td>
                                <td>{ product.quantity }</td>
                                <td>
                                <a className="btn btn-outline" style={{ marginRight:"15px" }} href={route('product.form_edit',product.id)}>Edit</a>

                                <InertiaLink
                                 className="btn btn-outline btn-error"
                                                href={route('product.delete' , product.id )}
                                                method="delete"
                                                as="button"
                                                type="button"
                                                onClick={() => {
                                                    confirm('Are you sure you want to delete this category?')}}
                                                >
                                                Delete
                                </InertiaLink>
                                </td>
                            </tr>
                        </tbody>
                                ))
                            }




                </table>
                </div>






        </AuthenticatedLayout>


    )



}