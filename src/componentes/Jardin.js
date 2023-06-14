import React from "react";
import '../stylesheets/Jardin.css'
function Jardin() {
    return(
        <table id='tabla-jardin'>
            <thead>
                <tr>
                    <th> Nombre </th>
                    <th> Especie </th>
                    <th> Edad_inicial</th>
                    <th> Descripcion</th>
                </tr>
                <tr>
                    <td><input type = "text" id="username"/></td>
                    <td><input type = "text" id="especie"/></td>
                    <td><input type = "text" id="edad_inicial"/></td>
                    <td><input type = "text" id="descript"/></td>
                    <td><button type="button" onclick='create_plant()'>Añadir Planta</button></td>
                </tr>
            </thead> 
            <tbody>
            </tbody>
        </table>
    )
}

export default Jardin;