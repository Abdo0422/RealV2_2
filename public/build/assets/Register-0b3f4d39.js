import{_ as c,r as p,j as s,a as e,n as f,d as w}from"./app-35762901.js";import{G as g}from"./GuestLayout-bbec8b6c.js";import{T as m,I as i}from"./TextInput-292198c2.js";import{I as n}from"./InputLabel-d62f6c0b.js";import{P as h}from"./PrimaryButton-7d5fb015.js";import"./ApplicationLogo-37d09076.js";function F(){const{data:r,setData:t,post:l,processing:d,errors:o,reset:u}=c({name:"",email:"",password:"",password_confirmation:""});return p.useEffect(()=>()=>{u("password","password_confirmation")},[]),s(g,{children:[e(f,{title:"Register"}),s("form",{onSubmit:a=>{a.preventDefault(),l(route("register"))},children:[s("div",{children:[e(n,{htmlFor:"name",value:"Name"}),e(m,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),required:!0}),e(i,{message:o.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("email",a.target.value),required:!0}),e(i,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password",a.target.value),required:!0}),e(i,{message:o.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value),required:!0}),e(i,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:[e(w,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e(h,{className:"ml-4",disabled:d,children:"Register"})]})]})]})}export{F as default};
