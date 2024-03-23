import React, { useState, useEffect } from 'react'
import DatePickerComponent from './DaterPickerComponent'

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
        {isFinished ? 
        <>
        <h2 className="text-5xl tracking-tight font-extrabold text-white text-center">Feliz Cumpleaños</h2>
        <img src="/public/go-karts.jpg" alt="imagen Karts" />
        <p>🏎️ Efectivamente nos vamos a los karts!! 🏎️</p>
        <h3>Selecciona el día que quieres ir</h3>
        <DatePickerComponent/>
        </>
         : countdown}
        </div>
       
  )
}

export default Countdown