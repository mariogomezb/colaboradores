import './App.css';
import { nanoid } from 'nanoid';
import { baseColaboradores } from './api/baseColaboradores';
import { useState } from 'react';



function App() {
  
  const [colaboradores,setColaboradores]= useState(baseColaboradores)

  const [nombre,setNombre]= useState('')
  const [correo,setCorreo]= useState('')

  const [buscar,setBuscar]=useState('')
  
  const handleSubmit =e=>{
      e.preventDefault();
      setColaboradores([...colaboradores,
      {
        nombre:nombre,
        correo:correo,
        id:nanoid(),
      }])

  }

  return (
    <div className="container bg-light pb-5 mt-5 border border-primary rounded">
      <h1 className="text-center text-primary pt-3">Colaboradores</h1>

      <div className="row">
        <div className='col-6'>
          <input className="mt-3 form-control" type="text" placeholder="Busqueda..." onChange={(e)=>setBuscar(e.target.value)}/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input className="form-control" type="text" placeholder="Nombre" onChange={e=>setNombre(e.target.value)}/>
            <input className="form-control mt-2" type="text" placeholder="E-mail" onChange={e=>setCorreo(e.target.value)}/>
            <button className='btn btn-primary mt-2' type="submit">Agregar</button>
          </form>
        </div>
      </div>
      <div className="row ms-5">
      <ul>
        {colaboradores.filter((item)=>{
          return item.nombre.toLowerCase().includes(buscar.toLowerCase());
        })
          .map((item)=>(
            <li key={item.id}>{item.nombre} - {item.correo}</li>
          ))
        }
      </ul>
      </div>
    </div>
  );
}

export default App;
