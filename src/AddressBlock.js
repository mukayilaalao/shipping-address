import React from "react";

function AddressBlock({ address }) {
  return (
    <div className="address">
      <div className="address-name">{address.name}</div>
      <div>{address["address line 1"]}</div>
      <div>{address["address line 2"]}</div>
      <button>Ship to this address</button>
    </div>
  );
}

export default AddressBlock;
