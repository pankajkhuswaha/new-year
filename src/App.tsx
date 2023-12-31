import { useState } from "react";
import BounceText from "./components/BounceText.js";
import Layout from "./layout/index.js";
import SlideText from "./components/SlideText.js";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import crackSound from "./assets/crack.m4a";
import CountdownTimer from "./components/CountDown.js";

function App() {
  const [toggle, settoggle] = useState(false);
  const [hideprev, sethideprev] = useState(true);
  return (
    <>
      <Layout toggle={toggle}>
        <CountdownTimer/>
        {!hideprev && (
          <>
            <BounceText delay={3} text="Wish You !" />
            <BounceText delay={5} text="Happy New Year" />
            <BounceText delay={7} text="2024" />
          </>
        )}
        {toggle && (
          <audio loop autoPlay={true}>
            <source src={crackSound} type="audio/ogg" />
          </audio>  
        )}

        <AnimatePresence mode="popLayout">
          {hideprev && (
            <>
              <SlideText text="Good Bye 2023 !!" />
              <motion.div
                initial={{ scale: 0, x: -1000 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.5 }}
                exit={{ scale: 0, x: -1000 }}
                onClick={() => {
                  sethideprev(false);
                  setTimeout(() => {
                    settoggle(true);
                  }, 3000);
                }}
                className="btn mt-4"
              >
                Say Good Bye 🤞
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="f h-32"></div>
      </Layout>
    </>
  );
}

export default App;
