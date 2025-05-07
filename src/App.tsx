
import { useState } from 'react'
import { CacheDemo } from './components/CacheDemo'
import { Toaster } from "@/components/ui/sonner"
import './App.css'

function App() {
  return (
    <div className="App">
      <CacheDemo />
      <Toaster />
    </div>
  )
}

export default App
