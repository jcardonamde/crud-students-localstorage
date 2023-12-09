
const Estudiante = ({ estudiante, borrar, setEstudiante }) => {

    const {id, documento, nombre, apellido, correo, telefono} = estudiante

    return (
        <tr>
            <th scope="row">{documento}</th>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{correo}</td>
            <td>{telefono}</td>
            <td>
                <button className="btn btn-info" onClick={() => setEstudiante(estudiante)}>Editar</button>
                <button className="btn btn-danger" onClick={() => borrar(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default Estudiante;
