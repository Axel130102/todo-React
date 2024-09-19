import Swal from "sweetalert2";

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(id);
        Swal.fire({
          title: 'Elimiando correctamente!',
          icon: 'success',
          timer: 700, 
          showConfirmButton: false 
        });
      }
    });
  };

  const handleUpdate = () => {
    Swal.fire({
      title: '¿Estás seguro que deseas actualizar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        updateTodo(id);
        Swal.fire({
          title: 'Actualización exitosa!',
          icon: 'success',
          timer: 700, 
          showConfirmButton: false 
        });
      }
    });
  };
  

  return (
    <li className="shadow-xl bg-yellow-100 p-10 rounded m-5 text-center w-full relative rotate-2">
      <div>
        {priority && (
          <span className="bg-blue-500 text-white font-black py-1 px-2 rounded absolute top-2 right-2 text-xs">
            Prioritario
          </span>
        )}
        <div>
          <h5 className={`font-black ${state && 'line-through'}`}>{title}</h5>
          <p className={`text-slate-600 ${state && 'line-through'}`}>{description}</p>
          <div className="flex">
            <button 
            onClick={handleUpdate} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-1 rounded mx-auto block my-1 text-xs">
              Actualizar
            </button>
            <button 
              onClick={handleDelete} 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-1 rounded mx-auto block my-1 text-xs">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Todo;
