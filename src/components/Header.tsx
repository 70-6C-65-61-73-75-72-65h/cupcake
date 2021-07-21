import ShoppingCart from "@src/icons/ShoppingCart";
import { paths } from "@src/Routes";
import classNames from "@src/utils/classNames";
import React, { useState, ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

export default function Header({}: Props): ReactElement {
  const [activeItem, setActiveItem] = useState<boolean | number>(false);

  const setActive = ({ target }) => {
    setActiveItem(+target.dataset.tag);
  };

  const classNamesToggler = (tag) => ({
    "data-tag": tag,
    className: classNames(["item", activeItem === tag && "active"]),
    onClick: setActive,
  });

  return (
    <div className="header">
      <nav>
        <Link {...classNamesToggler(1)} to={paths.homepage[0]}>
          Shop
        </Link>
        <Link {...classNamesToggler(2)} to={paths.ourstory}>
          Our story
        </Link>
        <Link {...classNamesToggler(3)} to={paths.whymiss}>
          Why Miss cupcake
        </Link>
      </nav>
      <ShoppingCart
        itemsNumber={8}
        href={paths.checkout}
        onClick={() => setActiveItem(false)}
      />
    </div>
  );
}
