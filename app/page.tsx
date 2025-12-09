"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import { ImRocket } from "react-icons/im";
import { ImHangouts } from "react-icons/im";
import { ImSphere } from "react-icons/im";
import { ImUserCheck } from "react-icons/im";

export default function Home() {
  return (
    <div className="container">
      <div className="image-logo">
        <Image src="/logo.png" width={2400} height={200} alt="a logo" />
      </div>
      <div className="content">
        <h1>Welcome toABCDelivery_Import_Export SDN BHD.</h1>
        <p>Your most trusted partner in shipping to the Moon.</p>
      </div>
      <div className="box-container">
        <div className="align">
          <ImRocket />
          <p className="text">Fast Delivery</p>
        </div>
        <div className="align">
          <ImHangouts />
          <p className="text">24/7 Support</p>
        </div>
        <div className="align">
          <ImSphere />
          <p className="text">Global Coverage</p>
        </div>
        <div className="align">
          <ImUserCheck />
          <p className="text">Trusted Service</p>
        </div>
      </div>
      <div className="message">Follow Us!</div>
      <div className="button-section">
        <button className="button" onClick={handleClick}>
          Start Shipping Now!
        </button>
      </div>
      <Footer /> {}
    </div>
  );
  function handleClick() {
    alert("Button clicked!");
  }
}
