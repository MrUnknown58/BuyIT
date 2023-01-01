import React, { useContext } from "react";
import { AppContext } from "../ContextAI/statescontext";

export default function Contact() {
  const a=useContext(AppContext);

  return (
    <>
    <div className="text-center font-bold font-serif text-4xl mb-10 mt-4 underline decoration-blue-500 underline-offset-2 ">Contact Our Team:</div>
      <form action="https://formspree.io/f/xnqrzqog"
        method="POST">
      <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
  <iframe
        title="lk"
        className="hover:cursor-move"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.07262980825!2d88.36356511477574!3d22.538951885200163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dfad4bf901%3A0xfbbe370e3a5a4dc8!2sQuest%20Mall!5e0!3m2!1sen!2sin!4v1665305313027!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  </div>
  <div className={`${a[0]?'hidden':''} container px-5 py-24 mx-auto flex`}>
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">We are Happy to serve you and will welcome your feedbacks...</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
</form>
    </>
  );
}
