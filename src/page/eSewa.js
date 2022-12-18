import React from "react";

const ESwea = ({ data }) => {
  console.log(data);
  return (
    <form action="https://uat.esewa.com.np/epay/main" method="POST">
      <input value="100" name="tAmt" type="hidden" />
      <input value="100" name="amt" type="hidden" />
      <input value="0" name="txAmt" type="hidden" />
      <input value="0" name="psc" type="hidden" />
      <input value="0" name="pdc" type="hidden" />
      <input value="EPAYTEST" name="scd" type="hidden" />
      <input
        value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
        name="pid"
        type="hidden"
      />
      <input
        value="http://localhost:3001/success?q=su"
        type="hidden"
        name="su"
      />
      <input
        value="http://localhost:3001/failure?q=fu"
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
