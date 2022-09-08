import axios from "axios";
import React from "react";

function TestDeOmc34() {
  const BASEURL = "http://127.0.0.1:8080/";

  //Api resquest
  const api = axios.create({
    baseURL: BASEURL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      // Authorization: `Token ${dataToken.token}`,
    },
  });

  const [getApi, setApi] = React.useState([]);

  React.useEffect(() => {
    callApis();
  }, []);

  const callApis = async () => {
    const { data: response } = await api("prueba");
    setApi(response);
    console.log(response);
  };

  return (
    <div className="mt-5 pt-5 container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {getApi.map((api, i) => (
            <tr key={i}>
              <td>{api.id}</td>
              <td>{api.name}</td>
              <td>{api.lastName}</td>
              <td>{api.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { TestDeOmc34 };
