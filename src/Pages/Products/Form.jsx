import { React, useState } from "react";

const productsInfo = [];
let id = 0;

function Form() {

  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  function handleForm(e) {
    e.preventDefault();
    let productName = document.querySelector("#productName").value;
    let productQuantity = document.querySelector("#productQuantity").value;
    let createTR = document.createElement("tr");
    createTR.setAttribute("id", id);
    let createTdId = document.createElement("td");
    createTdId.innerHTML = id;
    let createTdProduct = document.createElement("td");
    createTdProduct.innerHTML = productName
    let createTdQt = document.createElement("td");
    createTdQt.innerHTML = productQuantity;
 
    let table = document.querySelector("#tableProduct");
    table.appendChild(createTR);
    createTR.appendChild(createTdId);
    createTR.appendChild(createTdProduct);
    createTR.appendChild(createTdQt);
   
    let productInfo = {
      id: id,
      product: productName,
      quantitiy: productQuantity
    }
    id = id + 1;
    productsInfo.push(productInfo);
    console.log(productsInfo);
    localStorage.setItem("Produtos: ", JSON.stringify(productsInfo))

    setProductName("");
    setProductQuantity("");
    

  }

    return (
        <>
    <form onSubmit={handleForm}>
        

  <p>
    <input
      required
      type="text"
      name="productName"
      id="productName"
      placeholder="Nome do produto"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
    />
  </p>
  <p>
    <input
      required
      type="number"
      name="product"
      id="productQuantity"
      placeholder="quantidade"
      value={productQuantity}
      onChange={(e) => setProductQuantity(e.target.value)}
    />
  </p>
  <p><input type="submit" id="add" value="Adicionar" /></p>
</form>

<table id="tableProduct">
  <thead>
      <th>ID</th>
      <th>Produto</th>
      <th>Quantidade</th>
  </thead>
  <tbody>

  </tbody>
</table>
</>
        )
    }

export default Form;
