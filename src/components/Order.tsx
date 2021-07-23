import { Iorder } from "@src/constants";
import { useTypedSelector } from "@src/reducers";
import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  className?: string;
  order?: Iorder;
}

export const OrderItem = ({ item, className, key }) => {
  const cake = useTypedSelector((state) =>
    state.cardlist.find((cake) => cake.id === key)
  );
  return (
    <div className={`${className}-item`}>
      <div className={classNames([className, "item", "img"])}>
        <img src={cake.img} alt="cakeInOrder" />
      </div>
      <div>{`${cake.title} x ${item.amount}`}</div>
      <div className={classNames([className, "item", "price"])}>
        {item.itemTotalPrice}
      </div>
    </div>
  );
};

// export default function Order({ className, order, activebuttons }: Props): ReactElement {
//   return (
//     <div className={className}>
//       {Object.keys(order).map((key) => (
//         <OrderItem key={key} item={order[key]} className={className} />
//       ))}
//       {/* <div className={classNames([className, "paycheck", "price"])}></div> */}
//     </div>
//   );
// }

// // cart__content
