import countTotalPrice from "@/libs/countTotalPrice";
import modifyAmount from "@/libs/modifyAmount";
import sliceText from "@/libs/sliceText";
import { useState, useEffect } from "react";

const CheckoutProduct = () => {
  // const { title, price, disc, quantity } = product ? product : {};
  // const totalPriceSingle = countTotalPrice([{ price, quantity, disc }]);
  const [cartData, setCartData] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
      // Get the saved data from localStorage
      const savedData = localStorage.getItem("cart");
      
      if (savedData) {
        setCartData(JSON.parse(savedData));
      }
    }, []);

    useEffect(() => {
      // Get the saved data from localStorage
      const formData = localStorage.getItem("formPayload");
  
      if (formData) {
        setFormData(JSON.parse(formData));
      }
    }, []);

  return (
    <tr>
      <td>
        {/* {console.log("cartData", cartData)}
        {console.log("formData", formData)} */}
        {/* {sliceText(title, 20)} <strong>× {quantity}</strong> */}
      </td>
      {/* <td>${modifyAmount(totalPriceSingle)}</td> */}
    </tr>
  );
};

export default CheckoutProduct;
