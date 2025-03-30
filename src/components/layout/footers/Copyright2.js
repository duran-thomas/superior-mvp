import Link from "next/link";
import React from "react";

const Copyright2 = () => {
  return (
    <div className="ltn__copyright-area ltn__copyright-2 section-bg-2 plr--5">
      <div className="container-fluid ltn__border-top-2">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="ltn__copyright-design clearfix">
              <p>
                All Rights Reserved @ Company{" "}
                <span className="current-year"></span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 align-self-center">
            <div className="ltn__copyright-menu text-end">
              <ul>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>{" "}
                <li>
                  <Link href="#">Claim</Link>
                </li>{" "}
                <li>
                  <Link href="#">Privacy & Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright2;
