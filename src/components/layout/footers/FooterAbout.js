import Link from "next/link";
import React from "react";

const FooterAbout = () => {
  return (
    <div className="col-xl-4 col-md-5">
      <div className="footer-widget footer-about-widget clearfix">
        <h4 className="footer-title">About Us.</h4>
        <p>
          Corporate clients and leisure travelers has been relying on{" "}
          <Link href="/contact">Groundlink</Link> for dependable, safe, and
          professional chauffeured car service in major cities across{" "}
          <Link href="/locations">World</Link>. Indeed, it has been more than
          one decade and five years that Groundlink
        </p>
        <div className="ltn__social-media-4">
          <ul>
            <li>
              <Link href="https://www.facebook.com" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>{" "}
            <li>
              <Link href="https://x.com" title="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>{" "}
            <li>
              <Link href="https://www.behance.com" title="Behance">
                <i className="fab fa-behance"></i>
              </Link>
            </li>{" "}
            <li>
              <Link href="https://www.youtube.com" title="Youtube">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
