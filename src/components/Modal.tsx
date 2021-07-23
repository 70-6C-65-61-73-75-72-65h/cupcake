import React, { ReactElement, useState, useContext } from "react";

interface Props {}

export default function Modal({ props }: Props): ReactElement {
  const { confirmStore, confirmDispatch } = useContext(AppContext);
  // const [close, setClose] = useState(false)
  const { close, backdrop } = props;

  const handleYes = () => {
    setClose(true);
    callback();
  };

  const handleNo = () => {
    setClose(true);
  };

  if (close) return null;

  return (
    //  backdrop
    <div className="modal-bg">
      <div className="modal-container">
        {/* <div className="cmodal-header">
             <img src={logo} />
           </div> */}
        {/* <div className="cmodal-body">
             <h1 className="cmodal-title">{title}</h1>
             {prompt && <p className="cmodal-prompt">{prompt}</p>}
             <div className="cmodal-buttons">
               {!justYes && (
                 <button
                   className="cmodal-button cmodal-button-no"
                   onClick={handleNo}
                 >
                   {no}
                 </button>
               )}
               <button
                 className="cmodal-button cmodal-button-yes"
                 onClick={handleYes}
               >
                 {yes}
               </button>
             </div>
           </div>*/}
      </div>
    </div>
  );
}

// import { AppContext } from "@src/app";
// import { clearConfirm } from "@actions/confirm";
// import Localized from "./localized";

// import logo from "@static/icons/logo.svg";
