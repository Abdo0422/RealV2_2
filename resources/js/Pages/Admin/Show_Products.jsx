import {useState,useEffect} from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';



export default function Show_Product({auth}) {
    const { products  } = usePage().props;
    
    


    return (
        <>
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-warning p-5 rounded-md">Products</h2>}>
            <Head title="ShowProducts" />
            <div style={{ textAlign:"center" }}>
            <h2 className="h2_style">Show all Product</h2>
            <form  className="m-auto form px-3 py-2 text-sm font-medium">
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <input className="input" placeholder="Search by Product" required="" id="search" onChange={(e) => handleValue(e.target.value)} type="text" />
                        
                        

                    </form>
            <div className="overflow-x">
                <table className="table table-zebra w-full"style={{width:"1500px" , margin: "0 auto", textAlign: "center"}}>
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
                                <td className="text-indigo-600 font-bold" style={{ maxWidth: "300px", whiteSpace: "pre-line" }}>{ product.title }</td>
                                <td className="text-indigo-600 font-md" style={{ maxWidth: "400px",textAlign:"start", whiteSpace: "pre-line" }}>{product.description}</td>
                                <td>{ product.category }</td>
                                <td><span className="text-indigo-600 font-bold">{ product.price }</span> DH</td>
                                <td className="text-indigo-400 font-bold">{ product.quantity }</td>
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






</div>



            </AuthenticatedLayout>
            <style>{`

.h2_style {
    font-size: 40px;
    padding-bottom: 40px;
}
.form {
    --timing: 0.3s;
    --width-of-input: 500px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #5B06E5;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom: 35px;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: rgb(241, 241, 241);
  }
  /* styling of Input */
  .input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    outline: none;
  }
  .input:focus {
    border: none;
    outline: none;                
  }
  

  /* styling of animated border */
  .form:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  /* Hover on Input */
  .form:focus-within {
      
        border-radius: var(--after-border-radius);
  }
  
  input:focus {
    outline: none;
    border: none;
  }
  /* here is code of animated border */
  .form:focus-within:before {
    transform: scale(1);
  }
  /* styling of close button */
  /* == you can click the close button to remove text == */
  .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  /* close button shown when typing */
  input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
  }

            `}</style>
</>





        )









}
