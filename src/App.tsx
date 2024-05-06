import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(".box",
      {x:40,backgroundColor:"green",width:'50px'},{y:200,x:150,backgroundColor:"blue",width:'150px'}
    );
  });

  return (
    <div ref={container} className="box ">
      Hello
    </div>
  );
}
