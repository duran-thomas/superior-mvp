"use client"  
import sliderImage12 from "@/assets/img/slider/12.jpg";
import Link from "next/link";
import DealarForm from "@/components/shared/forms/DealarForm";

const Hero14 = () => { 
  return (
    <div className="ltn__slider-area ltn__slider-6">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item-9 section-bg-1 bg-image"
          data-bs-bg={sliderImage12.src}
        >
          <div className="ltn__slide-item-inner">
            <div className="slide-item-info bg-overlay-white-90 text-center">
              <div className="slide-item-info-inner slide-item-info-line-no ltn__slide-animation">
                <div className="ltn__car-dealer-form-tab">
                  <div className="tab-content pb-10">
                    <div className="car-dealer-form-inner">
                      <div className="form-container">
                        {/* Left Section (Background Image) */}
                        <div className="image-section">
                          {/* Add any content or keep the background image as-is */}
                        </div>
                        
                        {/* Right Section (Form) */}
                        <div className="form-section">
                          <DealarForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero14;
