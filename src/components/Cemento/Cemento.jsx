import axios from "axios";
import React from "react";
import { useLogin } from "../../context/LoginContext";
import { RiFileEditFill } from "react-icons/ri";
import { FcFullTrash } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { FiAlertCircle } from "react-icons/fi";
import { CSVLink } from "react-csv";
import { TbArrowsDown, TbArrowsUp, TbArrowsDownUp } from "react-icons/tb";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Button } from "@mui/material";
import { BiExport } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function Cemento() {
  //Token necesary for authentication login
  const { dataToken } = useLogin();

  //URL base for aPI response
  const BASEURL = "http://127.0.0.1:8000/";
  // const BASEURL = "https://msdocs-python-sqlserver-api-215.azurewebsites.net/";

  //Api resquest
  const api = axios.create({
    baseURL: BASEURL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Token ${dataToken.token}`,
    },
  });

  //llamado de la api cuando se renderiza la pagina
  React.useEffect(() => {
    fetchApis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [acero, setAcero] = React.useState(); //Se guarda la data de la api de Acero
  const [aceroCopia, setAceroCopia] = React.useState(); //Se guarda una copia de la data de la api de Acero
  const [aceroCount, setAceroCount] = React.useState(); //Se guarda el conteo total de datos de la api Acero
  const [busqueda, setBusqueda] = React.useState(""); //Se guarda el valor de input de busqueda
  const [nditarNombre, netEditarNombre] = React.useState(""); //Valor de la edicion del nombre
  const [tipoDeAlerta, setTipoDeAlerta] = React.useState(""); //Tipo de alerta "success"#4caf50, "error"#ef5350, "warning"#ff9800 or "info"#03a9f4
  const [contenidoDeAlerta, setContenidoDeAlerta] = React.useState(""); //Informacion que se mostrara a traves de la alerta
  const [qtyArrays, setQtyArrays] = React.useState(2); //Cantidad de array de copiaProvedores
  const [rowsPagination, setRowsPagination] = React.useState(10); //Cantidad de hileras que se mostraran en pantalla. El valor predeterminado sera de 10
  const [containerPagination, setContainerPagination] = React.useState(0); //Muestra en que pagina se encuentra, el valor predeterminado es 0
  const [paginationBottoms, setPaginationBottoms] = React.useState(); //Array de botones de paginacion
  const [editAvailable, setEditAvailable] = React.useState(false); //Validador de edicion de nombre
  const [alerta, setAlerta] = React.useState(false); //Si se muestra la alerta
  const [idName, setIdName] = React.useState(); //Id de nombre, se usa para actualizar el nombre
  const [sortAlphabetic, setSortAlphabetic] = React.useState(""); //Asignacion de valor de Sort "Down", "up" or ""
  const [sortActivo, setSortActivo] = React.useState(""); //Asignacion de valor de Sort "Down", "up" or ""
  const [open, setOpen] = React.useState(false); //Abrir y cerrar el modal
  const [aceroActiva, setAceroActiva] = React.useState(false); //Abrir y cerrar el modal

  //funcion para mandar a llamar las apis
  const fetchApis = async () => {
    const { data } = await api("apimateriales/ListarCementos/");
    await paginationBottom(data.count, rowsPagination);
    setAcero(data);
    setAceroCopia(data);
    setAceroCount(1);
    console.log(data);
    console.table(data);
    //
  };

  //Actualiza el nombre, mediante el metodo put
  const nameCreator = (metodo, id) => {
    var URL;
    if (metodo === "post") {
      URL = `${BASEURL}apiProveedores/Marca/`;
    } else {
      URL = `${BASEURL}apiProveedores/Marca/${id}/`;
    }
    var data = JSON.stringify({
      nombre: nditarNombre,
      Activo: aceroActiva,
    });

    var config = {
      method: metodo,
      url: URL,
      headers: {
        Authorization: `Token ${dataToken.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.mensaje));
        console.log(response.data.info);
        setEditAvailable(false);
        generadorDeAlertas("success", response.data.mensaje);
      })
      .catch(function (error) {
        console.log(error);
        // generadorDeAlertas("error", error.response.data.error);
        generadorDeAlertas("error", "Error");
      });
  };

  //Generador de alertas, mse les asiga el tipo asi como su contenido
  const generadorDeAlertas = (tipo, contenido) => {
    setTipoDeAlerta(tipo);
    setContenidoDeAlerta(contenido);
    setAlerta(true);
    setTimeout(() => {
      setAlerta(false);
      setTipoDeAlerta("");
    }, 3000);
  };

  //Creador de arrays dinamico para la paginacion
  const paginationBottom = (lenght, rows) => {
    const pagination = Math.ceil(lenght / rows);
    let bottom = [];
    for (let index = 0; index < pagination; index++) {
      bottom.push(index);
    }
    return setPaginationBottoms(bottom);
  };

  //Configuracion y seteo de valores de busqueda
  const buscador = (e) => {
    setBusqueda(e.target.value);
    buscadorFiltrado(e.target.value);
  };

  //Sistema de filtrado del buscador
  const buscadorFiltrado = (filtro) => {
    if (filtro.lenght === 0) {
      setAceroCopia(null);
      setAceroCopia(acero);
    } else {
      // eslint-disable-next-line array-callback-return
      var resultadoBusqueda = acero.filter((productoFiltrado) => {
        if (
          productoFiltrado.nombre.toLowerCase().includes(filtro.toLowerCase())
        ) {
          return productoFiltrado;
        }
      });
      setAceroCopia(resultadoBusqueda);
    }
    setQtyArrays(resultadoBusqueda.length);
    paginationBottom(resultadoBusqueda.length, rowsPagination);
    setContainerPagination(0);
  };

  //Eliminar busqueda y restablece
  const borrarBusqueda = () => {
    setBusqueda("");
    buscadorFiltrado("");
  };

  //Asignacion de en cual paginado nos encontramos
  const handleChange = (event, value) => {
    setContainerPagination(value - 1);
  };

  //Asignacion de cuantas columnas se veran en la pantalla
  const handleChangeRows = async (event) => {
    await setRowsPagination(event.target.value);
    await paginationBottom(acero.length, event.target.value);
    setContainerPagination(0);
  };

  //Se hacen las validaciones de guardar la edicion del campo nombre
  const guardarEdicionDeNombre = async () => {
    if (nditarNombre.trim() === "") {
      generadorDeAlertas("error", "No se puede guardar con nombre en blanco!");
    } else {
      await nameCreator("put", idName);
      // await generadorDeAlertas("success", "Se actualizo el nombre con exito!");
      await restablecerValores();
    }
  };

  //Se crea el nombre
  const crearNombreValidacion = async () => {
    if (nditarNombre.trim() === "") {
      generadorDeAlertas("error", "No se puede crear con nombre en blanco!");
    } else {
      await nameCreator("post");
      await restablecerValores();
    }
  };

  //Se eliminan el nombre
  const eliminarNombre = async (id) => {
    await nameCreator("delete", id);
    await restablecerValores();
  };

  //Se restablecen los campos
  const restablecerValores = async () => {
    await setAcero([]);
    await setAceroCopia([]);
    await setBusqueda("");
    await setSortAlphabetic("");
    await setSortActivo("");
    await netEditarNombre("");
    await setContainerPagination(0);
    await setEditAvailable(false);
    await setAceroActiva(false);
    await fetchApis();
  };

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
    <div className="pt-5 mt-2 container" id="homeaceros">
      <br />
      <h3 className="h1 text-center">PROPIEDADES DEL CEMENTO</h3>
      <br />
      <div className="mb-3 d-flex align-items-center">
        {/* <span className="input-group-text" id="inputGroup-sizing-sm">
          Small
        </span> */}
        <input
          type="text"
          id="buscador"
          className="form-control w-50 me-auto"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Buscar..."
          onChange={buscador}
          value={busqueda}
        />
        {busqueda ? (
          <ImCross
            className="mx-2"
            cursor={"pointer"}
            onClick={() => borrarBusqueda()}
          />
        ) : null}
        {aceroCopia && (
          <div className="">
            <CSVLink
              data={acero}
              filename={"listarCemento.csv"}
              className="h3 me-1 text-success"
            >
              <BootstrapTooltip title="Descargar archivo">
                <BiExport />
              </BootstrapTooltip>
            </CSVLink>
          </div>
        )}
        <FormControl className="" sx={{ m: 1, minWidth: 85 }} size="small">
          <InputLabel id="demo-select-small">Rows</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={rowsPagination}
            label="Age"
            onChange={handleChangeRows}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
      {alerta && (
        <Alert severity={tipoDeAlerta} className="mt-3">
          {contenidoDeAlerta}
        </Alert>
      )}
      {acero ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th
                  // onClick={() => ordenarAlfabeticamente()}
                  style={{ cursor: "pointer" }}
                >
                  Codigo {sortAlphabetic === "down" && <TbArrowsDown />}
                  {sortAlphabetic === "up" && <TbArrowsUp />}
                  {sortAlphabetic === "" && <TbArrowsDownUp />}
                </th>
                <th
                  className=""
                  // onClick={() => ordenarActivoMercado()}
                  style={{ cursor: "pointer" }}
                >
                  Descripcion {sortActivo === "down" && <TbArrowsDown />}
                  {sortActivo === "up" && <TbArrowsUp />}
                  {sortActivo === "" && <TbArrowsDownUp />}
                </th>
                <th>Grado</th>
                <th>No. de barilla</th>
                <th>Diametro</th>
                <th>Area</th>
                <th>Perimetro</th>
                <th>Masa</th>
                <th>Tipo de esfuerzo</th>
                <th>Fecha de registro</th>
                <th className="text-center">Editar</th>
                <th className="text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {aceroCopia
                .slice(
                  containerPagination * rowsPagination,
                  containerPagination * rowsPagination + rowsPagination
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td className="col">{item.CodigoOmc23}</td>
                    <td className="col-3">{item.descriCorta}</td>
                    <td className="col-3">{item.descriLarga}</td>
                    <td className="col-5">{item.tipo}</td>
                    <td className="col">{item.clase}</td>
                    <td className="col">{item.Comentarios}</td>
                    <td className="col">{item.palabrasCve}</td>
                    <td className="col">{item.fuenteInf}</td>
                    <td className="col">{item.Omniclass}</td>
                    <td className="col">{item.fecRegInf}</td>
                    <td className="col">
                      <a href="#editaraceros">
                        <RiFileEditFill
                          className="editar"
                          onClick={() => {
                            netEditarNombre(item.nombre);
                            setIdName(item.idacero);
                            setAceroActiva(item.activo);
                            setEditAvailable(true);
                          }}
                        />
                      </a>
                    </td>
                    <td className="col-1 text-center">
                      <FcFullTrash
                        className="trash"
                        onClick={() => {
                          setIdName(item.idacero);
                          // nliminarNombre(item.idacero);
                          setOpen(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Cargando ...</h2>
      )}
      {qtyArrays === 0 && <h1>No hay información</h1>}
      <div className="mb-3 d-flex align-items-center">
        <Pagination
          count={acero ? paginationBottoms.length : 0}
          showFirstButton
          showLastButton
          // variant="outlined"
          color="primary"
          onChange={handleChange}
          page={containerPagination + 1}
        />
        <p className="m-auto">
          {containerPagination * rowsPagination + 1}
          {" - "}
          {containerPagination * rowsPagination + rowsPagination}
          {" de "}
          {aceroCount}
        </p>
        <FormControl
          className="ms-auto"
          sx={{ m: 1, minWidth: 85 }}
          size="small"
        >
          <InputLabel id="demo-select-small">Rows</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={rowsPagination}
            label="Rows"
            onChange={handleChangeRows}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
      <br />

      <div id="modalParaEliminar">
        <Dialog
          open={open}
          maxWidth={"xs"}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ fontSize: 60 }}
            className="text-center text-danger"
          >
            <FiAlertCircle />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Esta seguro que desea eliminar este registro?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "",
                m: "auto",
                width: "fit-content",
              }}
            >
              <Button
                color="error"
                variant="contained"
                className="me-2"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                color="info"
                variant="contained"
                onClick={() => {
                  setOpen(false);
                  eliminarNombre(idName);
                }}
              >
                Si, eliminar!
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export { Cemento };