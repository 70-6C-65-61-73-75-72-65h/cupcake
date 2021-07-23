import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "@src/pages/Homepage";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import OurStory from "@src/pages/OurStory";
import WhyMiss from "@src/pages/WhyMiss";
import Checkout from "@src/pages/Checkout";
import Payment from "@src/pages/Payment";

export const paths = {
  homepage: ["/", "/homepage"],
  ourstory: "/ourstory",
  whymiss: "/whymiss",
  checkout: "/checkout",
  payment: "/checkout/payment",
};

interface Props {}

export default function Routes({}: Props): ReactElement {
  return (
    <>
      <Route exact path={"*"} component={Header} />
      <Switch>
        <Route exact path={paths.homepage} component={Homepage} />
        <Route exact path={paths.ourstory} component={OurStory} />
        <Route exact path={paths.whymiss} component={WhyMiss} />
        <Route exact path={paths.checkout} component={Checkout} />
        <Route exact path={paths.payment} component={Payment} />
      </Switch>
      <Route exact path={"*"} component={Footer} />
    </>
  );
}
