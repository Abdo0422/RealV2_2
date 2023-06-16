import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Logo from '../../components/Logo'
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: true,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
      <GuestLayout>
        <>
            <Head title="Log in">
              
            </Head>

        <div className="flex min-h-full flex-col flex-1 justify-center px-6 py-12 lg:px-8">
          
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <div style={{display:"flex",justifyContent:"center"}}>
          <a href={route('userpage')}>
            <Logo classi={"button"}/>
            </a>
          </div>
          
          <h2 className="mt-10 text-center text-2xl  font-bold leading-9 tracking-tight text-gray-900" style={{wordSpacing:"5px",letterSpacing:"1px"}}>
          <span style={{fontWeight:"bolder",color:"#5B06E5",border:"1px #5B06E5 dashed",borderRadius:"50%",borderLeft:"none",borderRight:"none",padding:"10px"}}>Nice</span> to see you <span style={{fontWeight:"bolder",color:"#5B06E5",border:"1px #5B06E5 dashed",borderRadius:"50%",borderLeft:"none",borderRight:"none",padding:"10px"}}>again.</span>
          </h2>
          
          <div className="mt-5 mb-5 flex-col justify-center">
          
            <a href="/google_login" className="mb-4" >
              <div width="600px" className="border flex mb-4  p-3 rounded-md">
                <img width={"25px"} className="mr-5" src="./google.svg" />
                <p className='gradient font-bold'>Sign in with Google</p>
              </div>
            </a>
            <a href="/github_login" >
              <div width="600px" className="border flex  p-3 rounded-md">
              <img width={"25px"} className="mr-5" src="./github.svg" />
                <p className='gradient font-bold'>Sign in with Github</p>
              </div>
            </a>
          </div>
          <p className="text-gray-600 text-sm text-center ">or</p>


        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" style={{letterSpacing:"0.8px"}} value="Email" className="block text-sm font-medium leading-6 text-gray-900">
                <span style={{fontWeight:"bolder",color:"#5B06E5"}}>Email</span> address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  style={{paddingLeft:"10px"}}
                  value={data.email}
                  autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('email', e.target.value)}
                  className="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" style={{letterSpacing:"0.8px"}} value="Password"  className="block text-sm font-medium leading-6 text-gray-900">
                Pass<span style={{fontWeight:"bolder",color:"#5B06E5"}}>word</span>
                </label>
                
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  style={{paddingLeft:"10px"}}
                  name="password"
                  value={data.password}
                  autoComplete="current-password"
                  onChange={(e) => setData('password', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 value:ml-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"                />
                <InputError message={errors.password} className="mt-2" />
                {canResetPassword && (
                    <div className="text-sm">
                        
                        </div>
                    )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href={route('register')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-900">
              Register Now!
            </a>
          </p>
        </div>
      </div>
    <style>
      
    </style>
    </>
    </GuestLayout>
    )}

    
        