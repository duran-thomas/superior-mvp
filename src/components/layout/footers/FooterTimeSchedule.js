"use client";
import bgImage4 from "@/assets/img/bg/4.jpg";
import { useFooterContex } from "@/providers/FooterContext";
const FooterTimeSchedule = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <div className="col-xl-4 col-md-5">
      <div
        className={`footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1 ${
          (!footerStyle || footerStyle === 1) && footerBg === "dark"
            ? "bg-image bg-overlay-theme-black-90"
            : ""
        }`}
        data-bs-bg={
          (!footerStyle || footerStyle === 1) && footerBg === "dark"
            ? bgImage4.src
            : ""
        }
      >
        <h6 className="ltn__secondary-color text-uppercase">
          {"// time shedule"}
        </h6>
        <h4 className="footer-title">Meet In Timeline.</h4>
        <ul>
          <li>
            Monday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Tuesday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Wednesday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Thursday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Friday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Saturday <span>07:00AM - 20:00PM</span>
          </li>
          <li>
            Sunday <span>Official Holiday</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTimeSchedule;
