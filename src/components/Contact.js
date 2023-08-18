import React, {useRef} from "react"
import emailjs from "@emailjs/browser"

export const Contact = () => {
   
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_kokgczx','template_aathii7', form.current, 'ZVw6jbl5vdyszj8ux')
      .then((result) =>{
         console.log(result.text);
      }, (error) => {
         console.log(error.text);
      });
      e.target.reset();
   }    

   return  <div className="flex flex-column justify-center">   
   <form ref={form} className="space-y-4 w-[40rem]" onSubmit={sendEmail}>
 
   <div>  
   <label className="block text-gray-100 font-bold text-left text-lg" htmlFor="email">Email</label>  
   <input 
   className="w-full rounded px-1 py-2 text-gray-500"
   type="email"
   name="email"
   placeholder="ex: john@doe.com"
   /> 
   </div>
   <div>
   <label className="block text-gray-100 font-bold text-left text-lg" htmlFor="subject">Objet</label>
   <input 
   className="w-full rounded px-1 py-2 text-gray-500"
   type="text"
   name="subject"
   placeholder="Objet"
   /> 
   </div>

   <div>
   <label className="block text-gray-100  font-bold text-left text-lg" htmlFor="message">Message</label>  
   <textarea 
   className="w-full rounded px-1 text-gray-500"
   type="text"
   name="message"
   placeholder="Veuillez écrire un message"
   cols="20"
   rows="6"
   /> 
   </div>
   <button className="bg-blue-300 hover:bg-dreamy-purple text-white font-bold shadowed rounded py-2 px-4" type="submit">Envoyer</button>
   </form>
   </div>
}