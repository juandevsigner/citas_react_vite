import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {

      const [nombre, setNombre] = useState('');
      const [propietario, setPropietario] = useState('');
      const [email, setEmail] = useState('');
      const [fecha, setFecha] = useState('');
      const [sintomas, setSintomas] = useState('');

      const [error, setError] = useState(false);
      useEffect(()=>{
       if(Object.keys(paciente).length >0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setFecha(paciente.fecha)
            setEmail(paciente.email)
            setSintomas(paciente.sintomas)
       }
      },[paciente])
      
      const generarID = () => {
          const random = Math.random().toString(36).substr(2);
          const fecha = Date.now().toString(36)

          return random + fecha
      }


      const handleSubmit = (e) =>{
          e.preventDefault();

          if([nombre, propietario, email, fecha, sintomas].includes('')) {
            
            setError(true)
            return;
          }

          setError(false)

          const objetoPaciente ={
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
          }

          if(paciente.id){
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})
          }else{
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente]);
          }

          setNombre('')
          setEmail('')
          setPropietario('')
          setFecha('')
          setSintomas('')

          
      }

      return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Agrega Pacientes y  <span className="text-indigo-600 font-bold"> Administralos</span></p>
          <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md py-10 mb-10 px-5">
              {error && <Error>
                      <h1 className="font-black">ERROR!</h1>
                      <p className="font-normal">Todos Cambios son Obligatorios</p>
                </Error>}
              <div className="mb-5">
                  <label htmlFor="nombre"
                  className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                  <input id="nombre"
                          className="border w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                          type="text"
                          placeholder="Nombre de la Mascota"
                          value={nombre}
                          onChange={(e)=> setNombre(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                  <input id="propietario" className="border w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    type="text" placeholder="Nombre del Propietario"
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-Mail</label>
                  <input id="email" className="border w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    type="email" placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                  <input id="alta" className="border w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    type="date"
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                  <textarea className="border w-full p-2 mt-2 placeholder-gray-500 rounded-md" id="sintomas"
                  placeholder="Describe los sintomas"
                  value={sintomas}
                  onChange={(e)=> setSintomas(e.target.value)}
                  />
              </div>
              <input type="submit" 
                      className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-indigo-900 transition-all cursor-pointer"
                      value={ paciente.id ? 'Guardar Cambios': 'Crear Paciente'}
              />
          </form>
        </div>
      )
}

export default Formulario