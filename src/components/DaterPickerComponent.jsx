import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const DatePickerComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	// Función para guardar la fecha seleccionada por el usuario
	const handleDateChange = (date) => {
		setSelectedDate(date);
		// Enviar la fecha seleccionada al servidor usa axios para hacer una petición HTTP
		axios.post(`https://web-cumple-seven.vercel.app/api/save-date`, { date: date.toString() })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  return (
	<div className="flex flex-col justify-center items-center pb-9">
		<div className={`transition-all ${isVisible ? "" : "hidden"}`} >
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange} // Función que se ejecuta cuando el usuario selecciona una fecha
				dateFormat="dd/MM/yyyy"
				minDate={new Date()}
				isClearable
				showYearDropdown
				scrollableMonthYearDropdown
				className="border p-2 rounded-lg text-center text-sm text-white font-bold mt-4 w-full"
				placeholderText="Selecciona una fecha"
			/>
	</div>
		<div className='font-extrabold text-gray-500 rounded sm:text-xl bg-white mt-4 mb-10 w-full text-center w-[200px]'>
			<button
				onClick={() => setIsVisible(!isVisible)}
				className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
				>
				{isVisible ? "Ocultar Calendario" : "Mostrar Calendario"}
			</button>
		</div>
	</div>
	)	
}

export default DatePickerComponent;
