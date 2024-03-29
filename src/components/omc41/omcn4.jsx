import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import GlobalFilter from "../GlobalFilter";

export default function Omcn4(props) {
  //ESTILOS CSS PARA SELECCIONAR FILA
  function cleanTr() {
    document.querySelectorAll(".trN4").forEach(function (index) {
      index.classList.remove("row-selected");
      index.classList.remove("other-clic");
    });
  }

  const selectRow = (e) => {
    const selectRowTag = e.currentTarget;
    if (selectRowTag.classList.contains("row-selected")) {
    } else {
      cleanTr();
      selectRowTag.classList.add("row-selected");
    }
  };

  const data = useMemo(() => props.dataomcn4, [props.dataomcn4]);

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "",
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Código",
        accessor: "Codigo",
        className: "Codigo",
        style: {
          width: "100px",
        },
      },
      {
        Header: "Descripción en Inglés",
        accessor: "descriEng",
      },
      {
        Header: "Descripción en Español",
        accessor: "descriSpa",
      },
      {
        Header: "Definición en Inglés",
        accessor: "definicionEng",
      },
      {
        Header: "Definición en Español",
        accessor: "definicionSpa",
      },
      {
        Header: "Año de Registro",
        accessor: "anioReg",
      },
      {
        Header: "Registro final",
        accessor: "regFinal",
        Cell: (row) => {
          if (row.row.original.regFinal === true) {
            return <div>Si</div>;
          } else {
            return <div>No</div>;
          }
        },
      },
    ],
    []
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Editar",
        Cell: ({ row }) => (
          <button
            type="button"
            style={{ marginTop: "20%" }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modalEditar"
            onClick={() => props.edidrow(4, row.values)}
          >
            {" "}
            Editar
          </button>
        ),
      },
    ]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    prepareRow,
    state: { pageIndex },
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    tableHooks
  );

  const { globalFilter } = state;

  return (
    <div className="containerTable mt-4">
      <div className="headerTable">
        <div className="col-md-7 col-sm-5">
          <h2 className="mt-3 textTable">OMC Nivel 4</h2>
        </div>
        <div className="col-md-5 col-sm-7">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div className="table-responsive shadow-lg">
        <table {...getTableProps()} className="table  table-hover mt-1">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa-solid fa-angle-down"></i>
                      ) : (
                        <i className="fa-solid fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="trN4"
                  style={{ fontSize: "12px", fontFamily: "arial" }}
                  {...row.getRowProps()}
                  onClick={(e) => {
                    selectRow(e);
                    props.selectOpp4(row.original.Codigo);
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cell.column.className,
                            style: cell.column.style,
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="footerTable">
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={() => previousPage()}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => nextPage()}
        >
          Next
        </button>
        <br />
        <span>
          <strong>
            Página {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
}
