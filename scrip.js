const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
   fetch( "https://randomuser.me/api/" )
   .then((response)=>  response.json())
   .then(json=>userkorinishi(json.results[0]))
})
function userkorinishi(odam){
   const user=document.getElementById("user");
   const h1=document.createElement("h1");
   const age=document.createElement("h2");
   const tel=document.createElement("h2");
   const address=document.createElement("h3");
   const email=document.createElement("h3");
   const rasm=document.createElement("img");
   user.innerHTML=''
   console.log(odam)
   rasm.src=odam.picture.large;
   h1.textContent=`${odam.name.title}  ${odam.name.first} ${odam.name.last}`;
   age.textContent="Age:"+odam.dob.age;
   tel.textContent="Phone:"+odam.phone;
   address.textContent="Address:"+odam.location.country+" "+odam.location.city;
   email.textContent="Email:"+odam.email;
   user.appendChild(rasm)
   user.appendChild(h1)
   user.appendChild(age)
   user.appendChild(rasm)
   user.appendChild(address)
   user.appendChild(email)


}