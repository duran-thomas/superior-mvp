/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import CheckoutProduct from "@/components/shared/checkout/CheckoutProduct";
import Nodata from "@/components/shared/no-data/Nodata";
import countTotalPrice from "@/libs/countTotalPrice";
import getAllProducts from "@/libs/getAllProducts";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import paymnetImage3 from "@/assets/img/icons/payment-3.png";
import useSweetAlert from "@/hooks/useSweetAlert";
import { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Box from "@mui/material/Box";

const CheckoutPrimary = () => {
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);
  const creteAlert = useSweetAlert();
  const allProducts = getAllProducts();
  const searchParams = useSearchParams();
  const currentId = parseInt(searchParams.get("id"));
  const currentQuantity = parseInt(searchParams.get("quantity"));
  const currentColor = searchParams.get("color");
  const currentSize = searchParams.get("size");
  const { cartProducts: products } = useCartContext();
  const currentProduct = {
    ...allProducts?.find(({ id }) => id === currentId),
    quantity: currentQuantity,
    color: currentColor,
    size: currentSize,
  };
  const [cartData, setCartData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs().startOf("hour"));
      // Log selectedDate whenever it changes
      useEffect(() => {
        console.log("Selected Date:", selectedDate.format("YYYY-MM-DD"));
    }, [selectedDate]);

    // Log selectedTime whenever it changes
    useEffect(() => {
        console.log("Selected Time:", selectedTime.format("hh:mm A"));
    }, [selectedTime]);

  const isProducts = currentProduct?.title || products?.length ? true : false;
  const subtotal = countTotalPrice(
    currentId ? [{ ...currentProduct, quantity: currentQuantity }] : products
  );
  const shipping = 15;
  const totalPrice = modifyAmount(subtotal + shipping);
  // handle place order
  const handlePlaceOrder = async(e) => {
    e.preventDefault();

    const orderDetails = {
      firstName: firstName,
      lastName: lastName,
      email: formData.email,
      phone: formData.phone,
      addressLine1: addressLine1,
      addressLine2: addressLine2, 
      city: city,
      country: country,
      date: selectedDate.format("YYYY-MM-DD"),
      time: selectedTime.format("hh:mm A"),
      make: formData.brand,
      model: formData.model,
      year: formData.year,
      fuel: formData.fuel,
      serviceBooked: cartData[4].name
    }
    creteAlert("success", "Order Placed", "Your order has been placed successfully.");
    localStorage.removeItem("cart"); // Replace "yourKey" with the actual key name
    setIsPlaceOrder(false);
    // console.log("Final: ", orderDetails)
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(orderDetails),
      });

      const data = await res.json();
      
      if (data.result === 'success') {
        console.log('Form submitted successfully!');
      } else {
        console.log('Error submitting form.');
      }
    } catch (error) {
      console.log('Error submitting form.');
      console.error(error);
    }
  };
  useEffect(() => {
    if (isProducts) {
      setIsPlaceOrder(true);
    }
  }, [isProducts]);

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
    <div className="ltn__checkout-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__checkout-inner">
              {/* login */}
              {/* <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                <h5>
                  Returning customer?{" "}
                  <a
                    className="ltn__secondary-color"
                    href="#ltn__returning-customer-login"
                    data-bs-toggle="collapse"
                  >
                    Click here to login
                  </a>
                </h5> */}
                {/* <div
                  id="ltn__returning-customer-login"
                  className="collapse ltn__checkout-single-content-info"
                >
                  <div className="ltn_coupon-code-form ltn__form-box">
                    <p>Please login your accont.</p>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__name"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              name="ltn__email"
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                        Login
                      </button>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Remember me
                      </label>
                      <p className="mt-30">
                        <a href="register.html">Lost your password?</a>
                      </p>
                    </form>
                  </div>
                </div> */}
              {/* //</div> */}
              {/* coupon */}
              {/* <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                <h5>
                  Have a coupon?{" "}
                  <a
                    className="ltn__secondary-color"
                    href="#ltn__coupon-code"
                    data-bs-toggle="collapse"
                  >
                    Click here to enter your code
                  </a>
                </h5>
                <div
                  id="ltn__coupon-code"
                  className="collapse ltn__checkout-single-content-info"
                >
                  <div className="ltn__coupon-code-form">
                    <p>If you have a coupon code, please apply it below.</p>
                    <form action="#">
                      <input
                        type="text"
                        name="coupon-code"
                        placeholder="Coupon code"
                      />
                      <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                        Apply Coupon
                      </button>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* buyer info */}
              <div className="ltn__checkout-single-content mt-50">
                <h4 className="title-2">Billing Details</h4>
                <div className="ltn__checkout-single-content-info">
                  <form action="#" name="checkout-form" onSubmit={handlePlaceOrder}>
                    <h6>Personal Information</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__name"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__lastname"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            name="ltn__email"
                            placeholder="email address"
                            value={formData?.email}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__phone"
                            placeholder="phone number"
                            value={formData?.phone}
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__company"
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__phone"
                            placeholder="Company address (optional)"
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="row">
                      {/* <div className="col-lg-4 col-md-6">
                        <h6>Country</h6>
                        <div className="input-item">
                          <select className="nice-select">
                            <option>Jamaica</option>
                            <option>Australia</option>
                            <option>Canada</option>
                            <option>China</option>
                            <option>Morocco</option>
                            <option>Saudi Arabia</option>
                            <option>United Kingdom (UK)</option>
                            <option>United States (US)</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-lg-12 col-md-12">
                        <h6>Address</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item">
                              <input
                                type="text"
                                placeholder="House number and street name"
                                onChange={(e) => setAddressLine1(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item">
                              <input
                                type="text"
                                placeholder="Apartment, suite, unit etc. (optional)"
                                onChange={(e) => setAddressLine2(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Town / City</h6>
                        <div className="input-item">
                          <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Country</h6>
                        <div className="input-item">
                          <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)}/>
                        </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-6">
                        <h6>State </h6>
                        <div className="input-item">
                          <input type="text" placeholder="State" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Zip</h6>
                        <div className="input-item">
                          <input type="text" placeholder="Zip" />
                        </div>
                      </div> */}
                    </div>
                    {/* <p>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Create an
                        account?
                      </label>
                    </p> */}
                    <h6>Service Date and Time</h6>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      {/* <textarea
                        name="ltn__message"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea> */}
                      <div>
                    {/* <label>Select Date & Time:</label> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box display="flex" gap={2} alignItems="center">
                          {/* Date Picker */}
                          <DatePicker
                              label="Select Date"
                              value={selectedDate}
                              onChange={setSelectedDate}
                              renderInput={(params) => <TextField {...params} />}
                          />

                          {/* Time Picker */}
                          <TimePicker
                              label="Select Time"
                              value={selectedTime}
                              onChange={setSelectedTime}
                              views={["hours", "minutes"]} // Only allow hour selection
                              ampm={true} // 24-hour format (set to true for AM/PM)
                              renderInput={(params) => <TextField {...params} />}
                          />
                      </Box>
                  </LocalizationProvider>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* payment methods */}
          <div className="col-lg-6">
            <div className="ltn__checkout-payment-method mt-50">
              <h4 className="title-2">Payment Method</h4>
              <div id="checkout_accordion_1">
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-1"
                    aria-expanded="false"
                  >
                    Check payments
                  </h5>
                  <div
                    id="faq-item-2-1"
                    className="collapse"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>
                        Please send a check to Store Name, Store Street, Store
                        Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-2"
                    aria-expanded="true"
                  >
                    Cash on delivery
                  </h5>
                  <div
                    id="faq-item-2-2"
                    className="collapse show"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>Pay with cash upon delivery.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-3"
                    aria-expanded="false"
                  >
                    PayPal{" "}
                    <Image
                      src={paymnetImage3.src}
                      width={1000}
                      height={1000}
                      style={{ maxWidth: "131px" }}
                      alt="#"
                    />
                  </h5>
                  <div
                    id="faq-item-2-3"
                    className="collapse"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>
                        Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltn__payment-note mt-30 mb-30">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                type="submit"
                disabled={isPlaceOrder ? false : true}
              >
                Place order
              </button>
            </div>
          </div>
          {/* product to buy */}
          <div className="col-lg-6">
            {/* {!isProducts ? (
              <Nodata text={"No Product!"} />
            ) : ( */}
              <div className="shoping-cart-total mt-50">
                <h4 className="title-2">Cart Totals</h4>
                <table className="table">
                  <tbody>
                    {currentProduct?.title ? (
                      <CheckoutProduct product={currentProduct} />
                    ) : (
                      products?.map((product, idx) => (
                        <CheckoutProduct key={idx} product={product} />
                      ))
                    )}
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>${cartData && cartData[4].price.original}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrimary;
