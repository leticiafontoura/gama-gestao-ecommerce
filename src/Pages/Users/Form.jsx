import { React, useState, useEffect } from "react";

const usersInfo = [];
let id = 1;

function FormClients() {


  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userAddressNumber, setuserAddressNumber] = useState("");
  const [userAddressComplement, setuserAddressComplement] = useState("");
  const [userAddressNeighborhood, setuserAddressNeighborhood] = useState("");
  const [userAddressZipcode, setuserAddressZipcode] = useState("");
  const [userAddressCity, setuserAddressCity] = useState("");
  const [userAddressState, setuserAddressState] = useState("");
  const [userAddressCountry, setuserAddressCountry] = useState("");
  const [id, setId] = useState(0);
  const [usersInfo, setUsersInfo] = useState(undefined);

  const fullAddress = `${userAddress}, ${userAddressNumber}, ${userAddressComplement}, ${userAddressNeighborhood}, ${userAddressZipcode}, ${userAddressCity}, ${userAddressState}, ${userAddressCountry}`
 

  function handleForm(e) {
    e.preventDefault();

    let userInfo = {
      id: id,
      name: userName,
      email: userEmail,
      address: userAddress,
      number: userAddressNumber,
      complement: userAddressComplement,
      neighborhood: userAddressNeighborhood,
      zipcode: userAddressZipcode,
      city: userAddressCity,
      state: userAddressState,
      country: userAddressCountry,
      fullAddress: fullAddress
    }

    setId((previousId) => previousId + 1);
    setUsersInfo((previousUsersInfo) => [
      ...(previousUsersInfo ?? []),
      userInfo,
    ]);

    setuserName("");
    setuserEmail("");
    setuserAddress("");
    setuserAddressNumber("");
    setuserAddressComplement("");
    setuserAddressNeighborhood("");
    setuserAddressZipcode("");
    setuserAddressCity("");
    setuserAddressState("");
    setuserAddressCountry("");
  }

  useEffect(() => {
    const clients = JSON.parse(localStorage.getItem("Clients:") ?? "[]");
    setUsersInfo(clients);
    let maxId = -1;
    clients.forEach((c) => {
      if (c.id > maxId) {
        maxId = c.id;
      }
    });
    setId(maxId + 1);
  }, []);

  useEffect(() => {
    if (usersInfo === undefined) {
      return;
    }
    localStorage.setItem("Clients:", JSON.stringify(usersInfo));
  }, [usersInfo]);

    return (
        <>
        <h1>Preencha os dados abaixo para cadastrar o cliente:</h1>
    <form onSubmit={handleForm}>
        

  <p>
    <input
      required
      type="text"
      name="userName"
      id="userName"
      placeholder="Nome do cliente"
      value={userName}
      onChange={(e) => setuserName(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="email"
      name="email"
      id="userEmail"
      placeholder="E-mail do cliente"
      value={userEmail}
      onChange={(e) => setuserEmail(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="text"
      name="address"
      id="userAddress"
      placeholder="Rua"
      value={userAddress}
      onChange={(e) => setuserAddress(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="number"
      name="number"
      id="userAddressNumber"
      placeholder="Número"
      value={userAddressNumber}
      onChange={(e) => setuserAddressNumber(e.target.value)}
    />
  </p>
  <p>
    <input
      type="text"
      name="complement"
      id="userAddressComplement"
      placeholder="Complemento"
      value={userAddressComplement}
      onChange={(e) => setuserAddressComplement(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="text"
      name="neighborhood"
      id="userAddressNeighborhood"
      placeholder="Bairro"
      value={userAddressNeighborhood}
      onChange={(e) => setuserAddressNeighborhood(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="number"
      name="zipcode"
      id="userAddressZipcode"
      placeholder="CEP"
      value={userAddressZipcode}
      onChange={(e) => setuserAddressZipcode(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="text"
      name="city"
      id="userAddressCity"
      placeholder="Cidade"
      value={userAddressCity}
      onChange={(e) => setuserAddressCity(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="text"
      name="state"
      id="userAddressState"
      placeholder="Estado"
      value={userAddressState}
      onChange={(e) => setuserAddressState(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="text"
      name="country"
      id="userAddressCountry"
      placeholder="País"
      value={userAddressCountry}
      onChange={(e) => setuserAddressCountry(e.target.value)}
    />
  </p>
  <p><input type="submit" id="add" value="Adicionar" /></p>
</form>

<table id="tableProduct">
  <thead>
      <th>ID do cliente</th>
      <th>Nome do cliente</th>
      <th>E-mail do cliente</th>
      <th>Endereço do cliente</th>
  </thead>
  <tbody>
  {usersInfo?.map((c) => {
            return (
              <tr>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.fullAddress}</td>
              </tr>
            );
          })}
  </tbody>
</table>
</>
        )
    }

export default FormClients;
