import React, {useState} from "react";

import StripeContainer from "../components/stripeContainer";

export default function productTestPage() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <h1>Product Test Page</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
        <h2>20$</h2>
        <button onClick={() => {setShowItem(true)}}>Purchase item</button>
        </>
      )}
    </div>
  )
}
