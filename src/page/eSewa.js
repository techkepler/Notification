import React from "react";

const ESwea = ({ data }) => {
  return (
    <form action="https://uat.esewa.com.np/epay/main" method="POST">
      <input value={10} name="tAmt" type="hidden" />
      <input value={10} name="amt" type="hidden" />
      <input value="0" name="txAmt" type="hidden" />
      <input value="0" name="psc" type="hidden" />
      <input value="0" name="pdc" type="hidden" />
      <input value="EPAYTEST" name="scd" type="hidden" />
      <input value={data._id} name="pid" type="hidden" />
      <input
        value={`${window.location.origin}/eswea/success?q=su`}
        type="hidden"
        name="su"
      />
      <input
        value={`${window.location.origin}/failure?q=fu`}
        type="hidden"
        name="fu"
      />
      <input
        value="Pay With Esewa"
        type="submit"
        className="bg-green-600 px-2 py-2 rounded-md"
      />
    </form>
  );
};

export default ESwea;
