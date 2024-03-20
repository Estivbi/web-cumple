import React, { useState, useEffect } from 'react'

const Countdown = () => {
  const [countdown, setCountdown] = useState('Cargando...')
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2024-04-15T00:00:00")
    const intervalID = setInterval(() => {
      const now = new Date()
      const distance = targetDate.getTime() - now.getTime()
      if (distance <= 0) {  
        setIsFinished(true)
        clearInterval(intervalID)
        return
      } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      }
    }, 1000);
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div className="mb-4 text-5xl tracking-tight font-extrabold text-white text-center">
        {isFinished ? <img src="ruta-de-la-imagen" alt="imagen" /> : countdown}
        </div>
  )
}

export default Countdown