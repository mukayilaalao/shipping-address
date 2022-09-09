import React, { useEffect, useState } from "react";

import AddressBlock from "./AddressBlock";
const data = require("./data.json");
function AddressBlocks() {
  const [beginingIndex, setBeginingIndex] = useState(0);
  const [fiveAddresses, setFiveAddresses] = useState([]);
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(false);

  useEffect(() => {
    setFiveAddresses(data.slice(beginingIndex, beginingIndex + 5));
  }, [beginingIndex]);

  useEffect(() => {
    setDisabledLeft(beginingIndex === 0);
    setDisabledRight(beginingIndex + 5 >= data.length);
  }, [beginingIndex]);
  //   const leftScrolller=()=>{
  //     if
  //   }
  //   const rightScroller = ()=>{

  //   }

  let addressesComponents = fiveAddresses.map((address) => {
    return <AddressBlock address={address} key={address.id} />;
  });

  return (
    <div className="main">
      <h2 className="main-h2">Shipping Addresses</h2>
      <button
        className="main-left-scroller"
        onClick={() => setBeginingIndex(beginingIndex - 5)}
        disabled={disabledLeft}
      >
        {"<<"}
      </button>
      <section className="main-content">{addressesComponents}</section>
      <button
        className="main-right-scroller"
        onClick={() => setBeginingIndex(beginingIndex + 5)}
        disabled={disabledRight}
      >
        {">>"}
      </button>
    </div>
  );
}

export default AddressBlocks;
