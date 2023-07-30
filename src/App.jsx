
import MainPage from "./components/main"
import Header from "./components/header"
import Cars from "./components/cars"
import Conditions from "./components/Conditions"
import Contacts from "./components/Contacts"
import Modal from "./components/Modal"
import { useState, useLayoutEffect } from "react"

export default function App() {
  const [showModal, setShowModal] = useState(false)

  const handleClickScroll = (block) => {
    const element = document.getElementById(block);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clamp = (value) => Math.max(0, value);

  const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

  const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("");
  
    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.pageYOffset;
  
        const position = ids
          .map((id) => {
            const element = document.getElementById(id);
  
            if (!element) return { id, top: -1, bottom: -1 };
  
            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);
  
            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));
  
        setActiveId(position?.id || "");
      };
  
      listener();
  
      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);
  
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }, [ids, offset]);
  
    return activeId;
  };

  return (
    <div >
      <Header showForm={setShowModal} scroll={handleClickScroll} scrollSpy={useScrollspy}/>
      <div className="h-screen md:max-h-[1100px] bg-[#0B0B0B]">
        <MainPage showForm={setShowModal}/>   
      </div>
      <Cars showForm={setShowModal}/>
      <Conditions showForm={setShowModal}/>
      <Contacts showForm={setShowModal}/>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}