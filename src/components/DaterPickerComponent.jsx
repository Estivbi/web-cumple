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
		axios.post('http://localhost:5000/api/save-date', { date: date.toString() })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
	return (
		<div className="flex justify-center items-center">
			<div className={`transition-all ${isVisible ? "" : "hidden"}`}>
				<DatePicker
					selected={selectedDate}
					onChange={handleDateChange} // Función que se ejecuta cuando el usuario selecciona una fecha
					dateFormat="dd/MM/yyyy"
					minDate={new Date()}
					isClearable
					showYearDropdown
					scrollableMonthYearDropdown
					className="border p-2 rounded-lg w-full text-center text-white font-bold mt-4"
					placeholderText="Selecciona una fecha"
				/>
			</div>
			<div className="flex justify-center items-center">
				<button
					onClick={() => setIsVisible(!isVisible)}
					className="font-extrabold text-gray-500 rounded sm:text-xl dark_text-gray-400 bg-white">
					{isVisible ? "Ocultar Calendario" : "Mostrar Calendario"}
				</button>
			</div>
		</div>
	);
};

export default DatePickerComponent;
