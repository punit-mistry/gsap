import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App() {
  const container = useRef();

  const animate = () => {
    gsap.fromTo(
      ".box",
      {x:0,width:100,background:'blue'},
      {x:200,rotation:360,
        scale:5,
        marginTop:50,
        display: 'flex',
        justifyContent: 'center',
        
        duration:2
      }
    );
  };

  useGSAP(() => {}, []); // Empty useGSAP hook

  return (
    <>
      <div ref={container} className="box w-50">
        Hello
      </div>
      <button onClick={animate}>Animate</button>
    </>
  );
}
