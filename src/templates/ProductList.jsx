import React, { useEffect } from "react";
import { ProductCard } from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducks/products/operations";
import { getProducts } from "../reducks/products/selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("プロダクト");
  console.log(products);

  return (
    <section className={"c-section-wrapin"}>
      <div className={"p-grid__row"}>
        {products.length > 0 &&
          products.map((product) => <ProductCard key={product.id} />)}
      </div>
    </section>
  );
};

export default ProductList;
