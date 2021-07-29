import { React, useState, useEffect } from "react";

function Form() {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productsInfo, setProductsInfo] = useState(undefined);
  const [id, setId] = useState(0);

  function handleForm(e) {
    e.preventDefault();

    const productInfo = {
      id: id,
      product: productName,
      quantity: productQuantity,
    };

    setId((previousId) => previousId + 1);
    setProductsInfo((previousProductsInfo) => [
      ...(previousProductsInfo ?? []),
      productInfo,
    ]);
    setProductName("");
    setProductQuantity("");
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("Produtos:") ?? "[]");
    setProductsInfo(products);
    let maxId = -1;
    products.forEach((p) => {
      if (p.id > maxId) {
        maxId = p.id;
      }
    });
    setId(maxId + 1);
  }, []);

  useEffect(() => {
    if (productsInfo === undefined) {
      return;
    }
    localStorage.setItem("Produtos:", JSON.stringify(productsInfo));
  }, [productsInfo]);

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
        <p>
          <input type="submit" id="add" value="Adicionar" />
        </p>
      </form>

      <table id="tableProduct">
        <thead>
          <th>ID</th>
          <th>Produto</th>
          <th>Quantidade</th>
        </thead>
        <tbody>
          {productsInfo?.map((p) => {
            return (
              <tr>
                <td>{p.id}</td>
                <td>{p.product}</td>
                <td>{p.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Form;
