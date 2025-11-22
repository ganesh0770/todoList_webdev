"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div class="bg-gray-50 text-gray-800">


        <header class="bg-blue-600 text-white py-12">
          <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">About Todo_list</h1>
            <p class="text-lg max-w-2xl mx-auto">
              Helping you organize your tasks, boost productivity, and achieve your goals effortlessly.
            </p>
          </div>
        </header>

        <section class="py-16">
          <div class="container mx-auto px-6 md:px-0">
            <div class="max-w-3xl mx-auto space-y-8">

              <div>
                <h2 class="text-2xl font-semibold mb-2">Our Mission</h2>
                <p class="text-gray-700">
                  We aim to empower you to do more with less stress. A well-organized day leads to a focused mind and a happier life.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-semibold mb-2">Why Choose Us?</h2>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Simple & Intuitive:</strong> Add, edit, and track your tasks with ease.</li>
                  <li><strong>Stay Organized:</strong> Prioritize tasks and never miss a deadline.</li>
                  <li><strong>Accessible Anywhere:</strong> Sync tasks across all your devices.</li>
                  <li><strong>Boost Productivity:</strong> Features to help you focus on what matters most.</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-semibold mb-2">Our Story</h2>
                <p class="text-gray-700">
                  Todo_list started as a simple idea: create a clean, fast, and effective way to manage tasks for everyone. Today, thousands of users rely on us to stay organized and productive every day.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section class="bg-blue-100 py-12 w-full absolute bottom-0">
          <div class="container mx-auto text-center space-x-4">
            <h2 class="text-2xl font-bold mb-4">Ready to get organized?</h2>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Using Todo_list
            </Link>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Home</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Contact</Link>
          </div>

        </section>

      </div>
    </>
  )
}

export default page
