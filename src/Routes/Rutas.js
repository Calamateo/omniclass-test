import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar2'
import { TableContext } from '../context/Materiales/TableContext'
import Omc23Cruds from '../pages/omc23Cruds'
import PageOmc23 from '../pages/PageOmc23'
import { TableContainer } from "../components/Materiales/TableContainer";
import { Loading } from "../components/Materiales/Loading";
import { ListaDeMateriales } from "../components/Materiales/ListaDeMateriales";
import Footer from '../components/footer'
import Home from '../pages/Home'
import RolesOrg from '../pages/RolesOrg'
import PageConsultaOrg from '../pages/PageConsultaOrg'
import PageOmc34 from '../pages/PageOmc34'
import PageOmc41 from '../pages/PageOmc41'
import { TestDeOmc34 } from '../components/Test/TestDeOmc34'


function Rutas() {
    const { loading } = React.useContext(TableContext);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestDeOmc34 />} />
                <Route path="/userList" element={<Omc23Cruds />} />
                <Route path="/tablaReact" element={<PageOmc23 />} />
                <Route path="/omniclass" element={loading ? <Loading /> : <TableContainer />} />
                <Route path="/listaDeMateriales" element={<ListaDeMateriales />} />
                <Route path='/rolesOrganizacionales' element={<RolesOrg />} />
                <Route path='/consultaRolesOrganizacionales' element={<PageConsultaOrg />} />
                <Route path="/omniclass34" element={<PageOmc34 />} />
                <Route path="/omniclass41" element={<PageOmc41 />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Rutas }