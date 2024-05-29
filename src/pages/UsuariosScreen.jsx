import React from 'react'
import TableComponent from '../components/Table'

const UsuariosScreen = () => {
    const columns = [
        {
          title: 'Nombre Usuario',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Edad',
          dataIndex: 'edad',
          key: 'edad',
        },
        {
          title: 'Correo Electronico',
          dataIndex: 'pais',
          key: 'pais',
        },
      ];
  return (
    <>
    <h1>Usuarios</h1>
    <TableComponent columns={columns}></TableComponent>
    </>
  )
}

export default UsuariosScreen
