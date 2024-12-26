export default function Contact() {
  return (
    <>
      <p className="contact-heading fade-in-top">Contact Details</p>
      <hr />
    <form className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-lg mt-5 slide-in-right" action="">
    <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">Name:</label>
    <input className="w-full p-2 mb-4 border-2 border-gray-300 rounded-md text-lg focus:outline-none focus:border-yellow-400" type="text" id="name" name="name" required />
    
    <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">Email:</label>
    <input className="w-full p-2 mb-4 border-2 border-gray-300 rounded-md text-lg focus:outline-none focus:border-yellow-400" type="email" id="email" name="email" required />

    <label className="block mb-2 font-semibold text-gray-700" htmlFor="subject">Subject:</label>
    <input className="w-full p-2 mb-4 border-2 border-gray-300 rounded-md text-lg focus:outline-none focus:border-yellow-400" type="text" id="subject" name="subject" required />
    
    <label className="block mb-2 font-semibold text-gray-700" htmlFor="message">Message:</label>
    <textarea className="w-full p-2 mb-4 border-2 border-gray-300 rounded-md text-lg focus:outline-none focus:border-yellow-400" id="message" name="message" required></textarea>
    
    <button className="w-full p-2 bg-[#f5ab35] text-white font-semibold rounded-md hover:opacity-80 focus:outline-none" type="submit">Submit</button>
</form>

      </>
  );
}
