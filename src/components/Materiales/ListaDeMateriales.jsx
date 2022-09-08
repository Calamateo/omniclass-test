import React from "react";
import { TableContext } from "../../context/Materiales/TableContext";
import { RiFileEditFill } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import { Estructura } from "./Estructura";
import "./TableApi.css";
import { ModalMateriales } from "./ModalMateriales";
import { CSVLink } from "react-csv";
import { Clasificacion } from "./Clasificacion";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { SwipeableTemporaryDrawer } from "./SwipeableTemporaryDrawer";
import { Cemento } from "../Cemento/Cemento";
import Acero from "../Acero/Acero";

function ListaDeMateriales() {
  const {
    listarConcretosMateriales,
    datoBaseTabla,
    resetTabla,
    // listarTMA,
    // listarValorEsfuerzo,
    // listarTipoResistencia,
    // listarDensidad,
    // listarFlujoRev,
    // listarRevenimiento,
    // listarFibraConcre,
    // listarClasExposicion,
    // listarSistColocacion,
    listarConcretosMaterialesCopia,
    setListarConcretosMaterialesCopia,
    estructura,
    cimientos,
  } = React.useContext(TableContext);

  const datosGenerales = {
    numMat: "numMat",
    codigoOmc: "Código",
    Consecutivo: "No.",
    descriCorta: "Descripción Corta",
    descriLarga: "Descripción Larga",
    Comentarios: "Comentarios",
    palabrasCve: "palabras Clave",
    desCorEng: "Descripción Corta Inglés",
    desLargEng: "Descripción Larga Inglés",
    fuenteInf: "fuente Información",
    fecRegInf: "fecha de registro",
    codigoBimsa: "Código Bimsa",
    Nombre: "Nombre",
    SiglaEsf: "",
    ValorEsfuerzo: "Valor del Esfuerzo",
    Unidadval: "",
    tipoEsfuerzo: "Tipo Esfuerzo",
    TipoResistencia: "Tipo Resistencia",
    SiglaTma: "",
    valTma: "Valor del Tma",
    SiglaRev: "",
    tmaFrac: "",
    valRev: "Valor Revenimiento",
    Unidad: "",
    TipoCons: "Tipo de Consistencia",
    modElast: "Modulo de Elasticidad",
    Acronimo: "",
    Edad: "Edad",
    absorcionCap: "Absorción Capilar",
    Acronimo2: "",
    trabaExtend: "Trabajo extendido",
    Clase: "Clase",
    Color: "Color",
    Comportamiento: "Comportamiento",
    conAire: "Condición de Aire",
    conIonClor: "Condición de Ion",
    tiempoPrueba: "Tiempo de prueba",
    tipoSistema: "Tipo de sistema",
  };

  // const datosBaseParaLaTabla = [
  //   "numMat",
  //   "descriLarga",
  //   "Comentarios",
  //   "palabrasCve",
  //   "desCorEng",
  //   "desLargEng",
  //   "fuenteInf",
  //   "fecRegInf",
  //   "codigoBimsa",
  //   "Nombre",
  //   "tipoEsfuerzo",
  //   "tmaFrac",
  //   "TipoCons",
  //   "modElast",
  //   "Acronimo",
  //   "Edad",
  //   "absorcionCap",
  //   "Acronimo2",
  //   "trabaExtend",
  //   "Clase",
  //   "Color",
  //   "Comportamiento",
  //   "conAire",
  //   "conIonClor",
  //   "tiempoPrueba",
  //   "tipoSistema",
  // ];

  const [busqueda, setBusqueda] = React.useState("");
  const [seleccionarPropiedad, setSeleccionarPropiedad] = React.useState(null);
  const [seleccionarCimentaciones, setSeleccionarCimentaciones] =
    React.useState(null);
  // const [busqueda2, setBusqueda2] = React.useState("");

  const hangleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(busqueda);
  };

  const filtrar = (datoo) => {
    const resultadoSinNull = listarConcretosMateriales.filter(
      (x) => x.descriCorta !== null
    );
    if (datoo.length === 0) {
      return setListarConcretosMaterialesCopia(listarConcretosMateriales);
    } else {
      // eslint-disable-next-line array-callback-return
      var resultadoBusqueda = resultadoSinNull.filter((elemento) => {
        if (
          elemento.codigoOmc.toLowerCase().includes(datoo.toLowerCase()) ||
          elemento.descriCorta.toLowerCase().includes(datoo.toLowerCase())
        ) {
          return elemento;
        }
      });
      setListarConcretosMaterialesCopia(resultadoBusqueda);
    }
  };

  // const hangleChange2 = (e) => {
  //   setBusqueda2(e.target.value);
  //   filtradoEspecial(e.target.value);
  //   console.log(busqueda2);
  // };

  // const filtradoEspecial = (terminoDeBusqueda) => {
  //   // eslint-disable-next-line array-callback-return
  //   var resultadoBusqueda2 = listarConcretosMateriales.filter((elemento) => {
  //     if (
  //       elemento.valRev
  //         .toLowerCase()
  //         .includes(terminoDeBusqueda.toLowerCase()) ||
  //       elemento.valTma.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
  //     ) {
  //       return elemento;
  //     }
  //   });
  //   setListarConcretosMaterialesCopia(resultadoBusqueda2);
  // };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div className="container mt-5 pt-4">
      <h2 className="h1 text-center">LISTA DE MATERIALES/PRODUCTOS</h2>
      <br />
      <h2 className="h2 text-center my-2">Selecciona una clasificación</h2>
      <Clasificacion />
      {estructura && (
        <div className="div">
          <select
            onChange={(e) => setSeleccionarPropiedad(e.target.value)}
            class="form-select form-select-sm mt-5"
            aria-label=".form-select-sm example"
          >
            <option selected>Selecciona la opcion</option>
            <option value="1">Acero</option>
            <option value="2">Cemento</option>
          </select>

          <br />
          <br />
          {seleccionarPropiedad === "1" && <Acero />}
          {seleccionarPropiedad === "2" && <Cemento />}
        </div>
      )}
      {cimientos && (
        <div className="">
          <select
            onChange={(e) => setSeleccionarCimentaciones(e.target.value)}
            class="form-select form-select-sm mt-5"
            aria-label=".form-select-sm example"
          >
            <option selected>Selecciona la opcion</option>
            <option value="1">Concreto premezclado</option>
            <option value="2">Concreto</option>
          </select>

          {seleccionarCimentaciones === "1" && (
            <div className="concretoPremesclado mt-5">
              <div className="row">
                <div className="col-6 d-flex" role="search">
                  <input
                    className="form-control w-75"
                    type="search"
                    placeholder="Search"
                    width={"80% !important"}
                    aria-label="Search"
                    onChange={hangleChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </div>
                <div className="col-2"></div>
                <div className="col-4 d-flex align-items-end justify-content-end">
                  <SwipeableTemporaryDrawer />
                  <CSVLink
                    data={listarConcretosMateriales}
                    filename={"listarConcretosMateriales.txt"}
                    className="h3 me-1 text-success"
                  >
                    <BootstrapTooltip title="Descargar archivo">
                      <BiExport />
                    </BootstrapTooltip>
                  </CSVLink>
                  <ModalMateriales className="justify-aling-end" />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr id="table-materials-title">
                      {datoBaseTabla.map((title, index) => (
                        <th className="" key={index}>
                          {datosGenerales[title]}
                        </th>
                      ))}
                      <th>Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listarConcretosMaterialesCopia.map((material, index) => (
                      <tr
                        key={index}
                        id="table-materials"
                        className="seleccion"
                      >
                        {datoBaseTabla.map((item, index) => (
                          <td key={index}>{material[`${item}`]}</td>
                        ))}
                        <td>
                          <RiFileEditFill
                            className="trash"
                            onClick={resetTabla}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { ListaDeMateriales };
