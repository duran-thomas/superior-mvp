import Image from "next/image";
import iconImage10 from "@/assets/img/icons/10.png";
import iconImage11 from "@/assets/img/icons/11.png";
import iconImage12 from "@/assets/img/icons/12.png";

const Adress = () => {
  return (
    <div className="ltn__contact-address-area mb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage10} alt="Icon Image" />
              </div>
              <h3>Email Address</h3>
              <p>
                info@webmail.com <br />
                jobs@webexample.com
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage11} alt="Icon Image" />
              </div>
              <h3>Phone Number</h3>
              <p>
                +0123-456789 <br /> +987-6543210
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <Image src={iconImage12} alt="Icon Image" />
              </div>
              <h3>Office Address</h3>
              <p>
                18/A, New Born Town Hall <br />
                New York, US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
