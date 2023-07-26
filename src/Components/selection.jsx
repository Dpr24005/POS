import React, { useState, useEffect, useRef } from "react";
import * as mdb from "mdb-ui-kit";
import { data,beverage } from "../data/data";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";

const Selection = () => {
  const [foods, setFoods] = useState(data);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [value, setValue] = useState("");
  const [drinks, setDrinks] = useState(beverage);

  const addProductToCart = async (food) => {
    //check if the adding foods exist
    let findProductInCart = await cart.find((i) => {
      return i.id === food.id;
    });

    if (findProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === food.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
    } else {
      let addingProduct = {
        ...food,
        quantity: 1,
        totalAmount: food.price,
      };
      setCart([...cart, addingProduct]);
    }
  };

  const removeProduct = async (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((icart) => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <>
      <div className="container-fluid row">
        <div className="row">
          <div className="col-md-8">
            <div className="pb-0">

              {/* list-foods*/}
              <div className="">
                <div className="px-2">
              <h3 className="text-center bg-header mt-1">Foods</h3>
                </div>
                <div className="container row overflow-y-scroll max-height my-4 border">
                  {foods.map((food, index) => (
                    <div key={index} className="col-lg-3 mb-4">
                      <div
                        className="container-sm pos-item px-3 text-center border"
                        onClick={() => addProductToCart(food)}
                      >
                        <p className="name-tag">{food.name}</p>
                        <img
                          src={food.image}
                          alt={food.name}
                          className="img-fluid image-width" >
                            </img>
                        <p className="price-tag">Rs: {food.price} /=</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="row ">
              <div className="col-md-12">

                {/* list-Beverage */}
                <div className="">
                  <div className="px-2">
                <h3 className="text-center bg-header">Beverage</h3>
                  </div>
                <div className="container row overflow-y-scroll max-height-drink my-4 border">
                  {drinks.map((food, index) => (
                    <div key={index} className="container-sm col-lg-3 mb-4">
                      <div
                        className="container-xs pos-item px-3 text-center border"
                        onClick={() => addProductToCart(food)}
                      >
                        <p className="name-tag">{food.name}</p>
                        <img
                          src={food.image}
                          alt={food.name}
                          className="img-fluid image-width" >
                            </img>
                        <p className="price-tag">Rs: {food.price} /=</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              </div>

            </div>
          </div>


          <div className="col-md-4">
            {/* bill */}
            <div className="overflow-y-scroll max-bill border">
              <table className="table table-responsive table-hover">
                <thead>
                  <tr className="border-bottom">
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td>Total</td>
                    <td>Action</td>
                  </tr>
                </thead>

                <tbody>
                  {cart
                    ? cart.map((cartProduct, key) => (
                        <tr key={key}>
                          <td>{cartProduct.id}</td>
                          <td>{cartProduct.name}</td>
                          <td>{cartProduct.price}.00</td>
                          <td>{cartProduct.quantity}</td>
                          <td>{cartProduct.totalAmount}.00</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => removeProduct(cartProduct)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    : "No Item In Cart"}
                </tbody>
              </table>

              <div className="px-0 pt-4 mx-auto">
                <button className="btn btn-primary " type="button">
                  <h2>
                    <span>Pay Now LKR</span> <span>{totalAmount}.00</span>{" "}
                  </h2>
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Selection;
