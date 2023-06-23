import React, { Fragment, useContext, useEffect, useCallback } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../Store/CartContext";
const Header = (props) => {
  const cartctx = useContext(CartContext);

  const getitems = useCallback(async () => {
    const response = await fetch(
      "https://crudcrud.com/api/663cb0359af146ab964cf565ecfb36aa/product"
    );
    const data = await response.json();
    data.map((prod) => {
      return cartctx.addItem({ ...prod });
    });
  }, [cartctx]);

  useEffect(() => {
    getitems();
    console.log("once");
  }, [getitems]);


  return (
    <Fragment>
      <header className={classes.header}>
        <span>
          <h2 className={classes.h2}>Medicine React project</h2>
        </span>
        <span>
          <HeaderCartButton onClick={props.onShowCart} />
        </span>
      </header>
    </Fragment>
  );
};

export default Header;
