import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function ContatoEng() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
        alert("Fill in all fields")
        return;
    }


    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    emailjs.send("service_6g6c1pc", "template_91o3mq6", templateParams, "zjZ6JxujDEXl7Gatg")
    .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    }, (error) => {
        console.log("ERRO: ", error)
    })
  }

  return (
    <div className="bg-[#1E1E1E] drop-shadow-lg p-5 xs:mx-8 lg:mx-52 w-auto mt-20 rounded-lg text-white">
      <h1 className="lg:text-4xl xs:text-3xl">Contact Us</h1>
      <span className="block w-full h-1 bg-[#2E2D2D] my-4" />
      <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
        <input
          className="p-3 bg-[#2E2D2D] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="p-3 bg-[#2E2D2D] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea 
          className="p-3 bg-[#2E2D2D] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input
          type="submit"
          value="To send"
          className="p-3 bg-[#4A4A4A] rounded-md text-white cursor-pointer hover:bg-orange-500 transition-all"
        />
      </form>
    </div>
  );
  
}
