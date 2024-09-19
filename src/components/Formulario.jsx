import { useState } from "react"; 
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        title: 'Tarea',
        description: 'Descripción',
        state: 'Pendiente',
        priority: false,
    }); 

    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim())  {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El titulo y la descripción son obligatorios!",
              });
        }

        addTodo({
            //nos da un numero por milesimas de segundo 
            id: Date.now(),
            ...todo,
            state: state === 'completado'
        })
        Swal.fire({
            title: "Good job!",
            text: "Tarea agregada",
            icon: "success",
            timer: 2000,
          });
    }

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    return (
        <div className="flex justify-center items-center p-5 mt-5">
            <div className="w-full max-w-2xl shadow-lg shadow-slate-100/40 bg-yellow-100 p-10 rounded-xl	">
                <h1 className="text-4xl text-center mb-5 font-bold">To-do</h1>      
                <form onSubmit={handleSubmit}>
                    <div className="w-full max-w-lg min-w-[300px] mx-auto">
                        <input 
                            type="text" 
                            className="my-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-transparent rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-md hover:shadow-lg focus:shadow" 
                            placeholder="Ingresa la tarea" 
                            aria-label="To-do" 
                            aria-describedby="basic-addon1" 
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full max-w-lg min-w-[300px] mx-auto">
                        <textarea 
                            className="my-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-transparent rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-md hover:shadow-lg focus:shadow" 
                            placeholder="Ingresa la descripción" 
                            id="floatingTextarea"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full max-w-lg min-w-[300px] mx-auto">
                        <select 
                            className="my-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-transparent rounded-md px-4 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-md hover:shadow-lg focus:shadow " 
                            id="floatingSelect" 
                            aria-label="Estatus"
                            name="state"    
                            value={state}  
                            onChange={handleChange}
                        >
                            <option value="pendiente">Pendiente 📋</option>
                            <option value="completado">Completado ✅</option>
                        </select>
                    </div>

                    <div className="w-full max-w-lg min-w-[300px] mx-auto flex items-center justify-center">
                    <input 
                        type="checkbox" 
                        name="priority"
                        className="m-2 h-5 w-5 accent-yellow-500"
                        id="flexSwitchCheckChecked"
                        checked={priority} 
                        onChange={handleChange}
                        
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">¡Importante!</label>
                    </div>


                    <button 
                        type="submit" 
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mx-auto block mt-5"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
