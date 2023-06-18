import React, { useEffect, useState } from 'react';
import axios from "axios";
import Publicacion from './Publicacion'
function Publicaciones(){
    const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar una solicitud a la base de datos para obtener los datos
    // y luego establecerlos en el estado "datos" usando setDatos
    // Supongamos que los datos se obtienen correctamente y son un arreglo de objetos
    
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("/publicaciones");
      setDatos(response.datos);
    } catch (error) {
      console.error(error);
    }
  };
  const editPublicacion = async (id) => {
    try {
      // Aquí puedes realizar la solicitud PUT a la API para editar la planta con el ID proporcionado
      // Puedes utilizar axios o fetch para realizar la solicitud
      // Recuerda enviar los datos en el cuerpo de la solicitud
      // Luego, puedes llamar a fetchData() para actualizar los datos después de la edición
      var descripcion = document.getElementById("descrip").value;
    var tipo = document.getElementById("tipo").value;
    var asunto = document.getElementById("asunto").value;
    var user=document.getElementById("username").value;
    var data={"descripcion": descripcion, "tipo":tipo, "asunto":asunto,"usuario":user}

    fetch(`/publicacion/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response =>response.text())
    .then(text => {
        if(text==="SUCCESS"){
            fetchData();
        }
        else{
            alert("Error")
        }
    })
    } catch (error) {
      console.error(error);
    }
  };

  const deletePublicacion = async (id) => {
    try {
      // Aquí puedes realizar la solicitud DELETE a la API para eliminar la planta con el ID proporcionado
      // Puedes utilizar axios o fetch para realizar la solicitud
      // Luego, puedes llamar a fetchData() para actualizar los datos después de la eliminación
      fetch(`/planta/${id}`, {
        method: 'DELETE',
    }).then(response =>response.text())
    .then(text => {
        if(text==="SUCCESS"){
            fetchData();
        }
        else{
            alert("Error")
        }
    })
    } catch (error) {
      console.error(error);
    }
  };

  const createPublicacion = async () => {
    try {
      // Aquí puedes realizar la solicitud POST a la API para crear una nueva planta
      // Puedes utilizar axios o fetch para realizar la solicitud
      // Recuerda enviar los datos en el cuerpo de la solicitud
      // Luego, puedes llamar a fetchData() para actualizar los datos después de la creación
      var descripcion = document.getElementById("descrip").value;
    var tipo = document.getElementById("tipo").value;
    var asunto = document.getElementById("asunto").value;
    var user=document.getElementById("username").value;
    var data={"descripcion": descripcion, "tipo":tipo, "asunto":asunto,"usuario":user}


    fetch(`publicaciones`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response =>response.text())
    .then(text => {
        if(text==="SUCCESS"){
            fetchData();
        }
        else{
            alert("Error")
        }
    })
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <div className="form">
          <label htmlFor="descript">Descripcion:</label>
          <input type="text" id="descript" />
          <label htmlFor="tipo">Tipo:</label>
          <input type="text" id="tipo" />
          <label htmlFor="asunto">Asunto:</label>
          <input type="text" id="Asunto" />
          <button type="button" onClick={createPublicacion}>
          Crear Publicacion </button>
        </div>
      <h4>Publicaciones</h4>
      <Publicacion datos={datos} />
      {datos.map((publicacion) => (
            <tr key={publicacion.id}>
              <td>{publicacion.descripcion}</td>
              <td>{publicacion.tipo}</td>
              <td>{publicacion.asunto}</td>
              <td>
                <button type="button" onClick={() => editPublicacion(publicacion.id)}>
                  Editar
                </button>
                <button type="button" onClick={() => deletePublicacion(publicacion.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
    </div>
  );
}
export default Publicaciones;

