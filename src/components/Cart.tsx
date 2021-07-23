import { closeIconSize, IcakeOrder, orderConstants } from "@src/constants";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import Close from "@src/icons/Close";
import { useTypedSelector } from "@src/reducers";
import React, { ReactElement, useMemo } from "react";

interface Props {}

export default function Cart({}: Props): ReactElement {
  const isMobile = useMediaQuery("(max-width: 480px)");

  const order = useTypedSelector((state) => state.order);

  const cakes = useTypedSelector((state) =>
    state.cardlist
      .filter((cake) => cake.id in order.collection)
      .map((cake) => ({
        ...cake,
        amount: order.collection[cake.id].amount,
        price: order.collection[cake.id].itemTotalPrice,
      }))
  );

  const onClose = () => {};

  return (
    <div className="cart">
      <div className="cart__title"></div>
      <div className="cart__close" onClick={onClose}>
        {isMobile ? (
          <Close
            width={closeIconSize.mobile.cart.width}
            height={closeIconSize.mobile.cart.height}
          />
        ) : (
          <Close />
        )}
      </div>
      <div className="cart__content">
        <div className="cart__content-header-offset"></div>

        <div className="cart__content-order">
          {cakes.map((cake) => (
            <div className="cart__content-order-item">
              <div className="cart__content-order-img">
                <img src={cake.img} alt="cakeInCart" />
              </div>
              <div>{`${cake.title} x ${cake.amount}`}</div>
              <div className="cart__content-order-price">
                {orderConstants.dollar}
                {cake.price}
              </div>
            </div>
          ))}
        </div>
        <div className="cart__content-paycheck">{orderConstants.total}</div>
        <div className="cart__content-paycheck-price">
          {orderConstants.dollar}
          {order.totalPrice}
        </div>
      </div>
    </div>
  );
}
