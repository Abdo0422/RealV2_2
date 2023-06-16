import { useState ,useEffect } from 'react';

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Logo from '../../components/Logo'

import Footer from '../Footer'

import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        address:'',
        email: '',
        password: '',
        password_confirmation: '',
    });
    

  
  
    

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    
        
    
    

    return (
        

        
      <div className="bg-register-login min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <Head title="Register">
                
            </Head>
            
      

            <div className="flex min-h-full flex-col flex-1 justify-center px-6 py-12 lg:px-8">
          
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div style={{display:"flex",justifyContent:"center"}}>
            <a href={route('userpage')}>
            <Logo classi={"button"}/>
            </a>

          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Get <span style={{fontWeight:"bolder",color:"#5B06E5",border:"1px #5B06E5 dashed",borderRadius:"50%",borderLeft:"none",borderRight:"none",padding:"10px"}}>into it.</span> 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-5 mb-5 flex-col justify-center">
          
          <a href="/google_login" className="mb-4" >
            <div width="600px" className="border border-indigo-400 flex mb-4  p-3 rounded-md">
              <img width={"25px"} className="mr-5" src="./google.svg" />
              <p className='gradient font-bold ml-6'>Sign up with Google</p>
            </div>
          </a>
          <a href="/github_login" >
            <div width="600px" className="border border-indigo-400  flex   p-3 rounded-md">
            <img width={"25px"} className="mr-5 flex justify-start" src="./github.svg" />
              <p className='gradient font-bold ml-6'>Sign up with Github</p>
            </div>
          </a>
        </div>
          <form onSubmit={submit} className="space-y-6" action="#" method="POST">
                <div>
                <label htmlFor="name" style={{letterSpacing:"0.8px"}} value="Name" className="block text-sm font-medium leading-6 text-gray-900">
                <span style={{fontWeight:"bolder",color:"#5B06E5"}}>Full</span> Name
              </label>

                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        style={{paddingLeft:"10px"}}
                        className="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                

                <div className="mt-4">
                <label htmlFor="password" style={{letterSpacing:"0.8px"}} value="Password" className="block text-sm font-medium leading-6 text-gray-900">
                <span style={{fontWeight:"bolder",color:"#5B06E5"}}>Pass</span>word
              </label>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        style={{paddingLeft:"10px"}}
                        value={data.password}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 value:ml-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                <label htmlFor="password_confirmation" style={{letterSpacing:"0.8px"}} value="Confirm Password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm <span style={{fontWeight:"bolder",color:"#5B06E5"}}>Password</span>
              </label>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        style={{paddingLeft:"10px"}}
                        value={data.password_confirmation}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 value:ml-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

               
                    <Link
                        href={route('login')}
                        className="font-semibold text-indigo-600 hover:text-indigo-900"
                        >
                        Already registered?
                    </Link><br></br>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                
            </form>
            </div>
            </div>

            </div>
          


            
        </div>
        </div>

        
    );
}
