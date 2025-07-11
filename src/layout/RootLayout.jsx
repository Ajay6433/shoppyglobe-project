import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div>
        <Header />
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-4">
                {/* This is where the child components will be rendered */}
                <Outlet />
            </div>
        </main>
       <Footer/>
    </div>
  )
}

export default RootLayout