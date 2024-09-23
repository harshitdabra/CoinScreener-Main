import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import iphone from "../../../assets/iphone.png";
import eth from "../../../assets/eth.png"; 
import btc from "../../../assets/btc.png"; 
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="main-flex">
      <motion.img
        className="btc-image"
        src={btc}
        alt="Bitcoin Background"
        initial={{ y: -50 }}
        animate={{ y: 20 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.img
        className="eth-image"
        src={eth}
        alt="Ethereum Background"
        initial={{ y: -10 }}
        animate={{ y: 30 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1, type: "spring", stiffness: 100 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
        >
          Stay ahead of the market with CryptoScreener's live tracking features.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={"Explore Now"} />
          </a>
        </motion.div>
      </div>
      <div className="gradient-div">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
