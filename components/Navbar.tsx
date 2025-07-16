'use client'
import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--menu-bg)] border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-[var(--text-color)]">
          <div>
            <i className="fa-solid fa-phone mr-2 text-xl md:text-2xl"></i><span>+251910864124</span>
          </div>
          <div className="hover:text-blue-500 cursor-pointer">
            <i className="fa-solid fa-location-dot mr-2 text-xl md:text-2xl"></i><span>See our nearest shop</span>
          </div>
          <div className="flex space-x-4">
            {['instagram','tiktok','telegram','facebook'].map(icon => (
              <a key={icon} href="#" className="hover:text-blue-500 text-xl md:text-2xl">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <nav className="fixed w-full z-40 bg-transparent" style={{ top: 'var(--top-bar-height)' }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[var(--text-color)] flex-shrink-0">
            <img src="/image/ecco.png" alt="Logo" className="h-18 md:h-16" />
          </div>
          <div className="hidden md:flex space-x-6">
            {['MEN','WOMEN','KIDS','BABY','FAMILY'].map(label => (
              <a key={label} href="#" className="nav-link">{label}</a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-[var(--text-color)] hover:text-blue-500 text-xl md:text-2xl">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <button className="md:hidden text-[var(--text-color)] hover:text-blue-500 text-xl"
              onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-4 py-4 space-y-4 bg-[var(--menu-bg)] z-50 fixed left-0 right-0"
            style={{ top: '116px' }}>
            {['MEN','WOMEN','KIDS','BABY','FAMILY'].map(label => (
              <a key={label} href="#" className="nav-link">{label}</a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
