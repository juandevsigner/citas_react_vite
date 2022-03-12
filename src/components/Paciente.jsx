
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
          const respuesta = confirm('deseas eliminar');

          if(respuesta){
            eliminarPaciente(id)
          }
    }
  return (
        <div className="mx-3 mb-5 bg-white shadow-md px-5 py-10 rounded-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
              <span className="font-normal normal-case"> {nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
              <span className="font-normal normal-case"> {propietario}</span>
            </p>
        
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:
              <span className="font-normal normal-case"> {email}</span>
            </p>
        
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
              <span className="font-normal normal-case"> {fecha}</span>
            </p>
        
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
              <span className="font-normal normal-case"> {sintomas}</span>
            </p>
            <div className="flex mt-10 gap-10">
               <button 
               type="button"
               className="py-2 px-10  bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-md"
               onClick={()=> setPaciente(paciente)}
               >Editar</button>
               <button 
               type="button"
               onClick={handleEliminar}
               className="py-2 px-10 bg-red-600 hover:bg-red-900 text-white uppercase rounded-md"
               >Eliminar</button>
            </div>
        </div>
  )
}

export default Paciente