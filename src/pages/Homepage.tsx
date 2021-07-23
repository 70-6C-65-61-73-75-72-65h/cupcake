// import classNames from '@src/utils/classNames'
import React, { ReactElement, useContext, useEffect, useState } from "react";
import classNames from "@src/utils/classNames";

import homepage1 from "@static/images/homepage1.svg";
import homepage2_1 from "@static/images/homepage2_1.svg";
import homepage2_2 from "@static/images/homepage2_2.svg";
import homepage3 from "@static/images/homepage3.svg";
import {
  cardList as cl,
  Icake,
  minusRestriction,
  plusRestriction,
} from "@src/constants";
import Amount from "@src/components/Amount";
import Button from "@src/components/Button";
// import { AppContext } from "@src/App";
import { addCake, removeCake } from "@src/actions/order";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@src/reducers";
import { setCardList } from "@src/actions/cardlist";
// import { IcakeOrder } from "@src/constants";

// removeCake restriction less then 0
//
export const CakeCard = ({ cake }: { cake: Icake }) => {
  //   const { order, orderDispatch } = useContext(AppContext);

  const dispatch = useDispatch();

  const cakeOrder = useTypedSelector(
    (state) => state?.order?.collection[cake.id]
  );
  console.log(cakeOrder);

  const increase = () =>
    cakeOrder.amount < plusRestriction && dispatch(addCake(cake));
  // minusRestriction > cakeOrder.totalItem;
  // plusRestriction dispatch(addCake(cake));

  const decrease = () =>
    cakeOrder.amount > minusRestriction && dispatch(removeCake(cake));

  return (
    <div className="card">
      <div className="card__img">
        <img src={cake.img} alt="cake" />
      </div>
      <div className="card__title">{cake.title}</div>
      <div className="card__info">{cake.info}</div>
      <div className="card-actions">
        <Button>ADD TO CART</Button>
        {/* number of elements === order.amount */}
        <Amount
          amount={cakeOrder.amount}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </div>
  );
};

interface HomepageCatalogProps {
  title: string;
  cardList?: Icake[];
}

export const HomepageCatalog = ({ title, cardList }: HomepageCatalogProps) => {
  return (
    <div className="homepage__catalog">
      <div className="homepage__catalog-title">{title}</div>
      {cardList && (
        <div className="homepage__catalog-list">
          {cardList.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      )}
    </div>
  );
};

interface HomepageInfoProps {
  actionText: string;
  primaryText: string;
  secondaryText: string;
  illustration?: string | string[];
  specImgStyles?: string;
  imgRight?: boolean;
}

export const HomepageInfo = ({
  actionText,
  primaryText,
  secondaryText,
  illustration,
  specImgStyles, // should be a className of spec illustration combination
  imgRight = false,
}: HomepageInfoProps) => {
  return (
    <div className="homepage__info">
      <div className="homepage__info-text">
        <div className="homepage__info-primary">{primaryText}</div>
        <div className="homepage__info-secondary">{secondaryText}</div>
        <button className="homepage__info-action">{actionText}</button>
      </div>
      <div
        className={classNames([
          "homepage__info-illustration",
          illustration.length && specImgStyles,
        ])}
        style={!imgRight && { order: -1 }}
      >
        {Array.isArray(illustration) ? (
          illustration.map((imgInfo, key) => (
            <img key={key} src={imgInfo} alt="Data" />
          ))
        ) : (
          <img src={illustration} alt="Data" />
        )}
      </div>
    </div>
  );
};

export default function Homepage(): ReactElement {
  // const [cardList, setCardList] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // like api call to retrieve elements
    dispatch(setCardList(cl));
  }, []);

  const cardList = useTypedSelector((state) => state?.cardlist);

  return (
    <div className="homepage">
      <HomepageInfo
        actionText={"SHOP NOW"}
        primaryText={"Miss cupcake"}
        secondaryText={
          "We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment."
        }
        illustration={homepage1}
        imgRight
      />
      <HomepageInfo
        actionText={"WHY MISS CUPCAKE"}
        primaryText={"The Simple, Sweet Life"}
        secondaryText={
          "Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You’ll want to indulge in each and every decadent flavor."
        }
        illustration={[homepage2_1, homepage2_2]}
        specImgStyles="homepage__info-illustration-2"
      />
      <HomepageCatalog
        title={"Make your day a little sweeter"}
        cardList={cardList}
      />

      <HomepageInfo
        actionText={"Our story"}
        primaryText={"once upon a time.. "}
        secondaryText={
          "The art of baking runs deep in our family. Growing up on our family we learned from the best. Our mom was an amazing baker. She not only taught us how to bake, she passed along her values of quality, honesty and integrity."
        }
        illustration={homepage3}
      />
    </div>
  );
}
