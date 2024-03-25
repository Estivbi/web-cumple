import React, { useState, useEffect } from 'react'
import DatePickerComponent from './DaterPickerComponent'

const Countdown = () => {
  const [countdown, setCountdown] = useState('Cargando...')
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2024-03-25T00:00:00")
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
    <div className="py-8 px-4 mx-auto max-w-xl sm:max-w-3xl lg:max-w-4xl lg:py-16 lg:px-6 text-center">
      {isFinished ?
        <>
          <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-white text-center ">Feliz Cumpleaños</h2>
          <div className=' w-full sm:w-[400px] h-[336px] overflow-hidden mx-auto block pt-8 pb-8 '>
            <img className='w-full h-full object-cover rounded-lg' src="/go-karts.jpg" alt="imagen Karts" />
          </div>
          <p className="mb-4 text-2xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-white text-center">🏎️ Nos vamos a los karts!! 🏎️</p>
          <h3 className=" text-center font-light text-gray-500 sm:text-xl dark_text-gray-400">Selecciona el día que quieres ir</h3>
          <DatePickerComponent />
        </>
        : <h2 className='mb-4 text-2xl sm:text4xl lg:text-5xl tracking-tight font-extrabold text-white'>
          {countdown}
          </h2>
      }
    </div>
  )
}

export default Countdown