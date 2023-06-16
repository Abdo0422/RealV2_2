import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';




export default function Form_Product({auth}) {
    const { categories,product  } = usePage().props;




    return (
      <>
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight bg-primary p-5 rounded-md">Products</h2>}>
          <base href="/public"></base>

            <h2 className="h2_style">Edit Product</h2>







            <form encType="multipart/form-data" action={route('product.edit',product.id)} method="post" >

          <div>
            <label>Product Title:</label>
                <input id="input_color"name="title" type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="Write a Title" defaultValue={ product.title } required="" />
         </div>
<div>
            <label>Product Description:</label>
                <input id="input_color" name="description" type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="Write a Description" defaultValue={ product.description } required=""/>
</div>
<div>
            <label>Product Price:</label>
                <input id="input_color" name="price" type="number" className="input input-bordered input-primary w-full max-w-xs" placeholder="Write a Price" defaultValue={ product.price } required=""/>
</div>
<div>
            <label>Product Quantity:</label>
                <input id="input_color" name="quantity"type="number" className="input input-bordered input-primary w-full max-w-xs" min="0" placeholder="Write a Quantity" defaultValue={ product.quantity } required=""/>
</div>

            <div>
            <label>Current Product Image:</label>


            <img src={'products/'+product.image}  height="200" width="130" style={{display:"block",margin:"auto"}} alt="heelo" name="image"/><br></br>

              </div>
              <div>
            <label>Change Product Image:</label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" name="image" id="image"/>
              </div>


                <input style={{ margin:"10px" }} type="submit" className="btn btn-primary" value="Update"/>

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
        label{
          display:inline-block;
          width:200px;
          padding-bottom: 30px;
          text-align: left;
          left:0;
                }
        #hidden{
          display:none;
        }
        `}</style>
</>

    )


}
