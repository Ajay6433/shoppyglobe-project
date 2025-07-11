import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

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
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="text-sm">© 2023 My E-Commerce Store. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default RootLayout