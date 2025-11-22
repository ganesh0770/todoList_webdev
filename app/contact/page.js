"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
<>

<div class="bg-gray-50 text-gray-800 ">

  <header class="bg-blue-600 text-white py-2">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-2">Contact Us</h1>
      <p class="text-lg max-w-2xl mx-auto">
        We’d love to hear from you! Send us a message and we’ll get back to you as soon as possible.
      </p>
    </div>
  </header>

  <section class="py-4">
    <div class="container mx-auto px-6 md:px-0 max-w-3xl">
      
      <form class="bg-white p-8 rounded-lg shadow-md space-y-4">
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        <div>
          <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here..." class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>


      <div class="mt-8 text-center ">
        <p class="text-gray-700">Or reach us directly at:</p>
        <p class="text-gray-700 font-medium">Email: todo_list@gmail.com</p>
       
      </div>
      
    </div>
  </section>
  <section class="bg-blue-200 w-full py-4 absolute bottom-0">
          <div class="container mx-auto text-center space-x-4">
            <h2 class="text-2xl font-bold mb-4">Ready to get organized?</h2>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Using Todo_list
            </Link>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Home</Link>
            <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">About</Link>
          </div>

        </section>

</div>

</>
  )
}

export default page