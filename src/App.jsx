import React from 'react'
import NotificationBar from './components/Notification'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NotificationBar />
      <Navbar />
      {/* Main Content */}
      <Homepage />
    </div>
  )
}

export default App