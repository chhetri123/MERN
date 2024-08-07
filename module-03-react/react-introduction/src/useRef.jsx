import Layout from "./layout/layout";
import { useRef } from "react";

export default function App() {
  const nameRef = useRef();
  const contactRef = useRef();

  const btnRef = useRef();

  const focusInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current);
    console.log(btnRef.current.click());
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis error minima. Laboriosam dicta aspernatur nobis odio
          reprehenderit quam iste.
        </p>
        <input
          ref={focusInputRef}
          type="text"
          placeholder="name"
          onChange={(e) => {
            nameRef.current = e.target.value;
          }}
        />
        <input
          type="number"
          placeholder="contact number"
          onChange={(e) => {
            contactRef.current = e.target.value;
          }}
        />
        <button type="submit">submit</button>

        <button
          ref={btnRef}
          type="button"
          onClick={() => {
            alert("hello world");
          }}
        >
          click me for alert
        </button>
      </form>
      {/* <button ref={btnRef}>I am a button</button>
      <input type="text" ref={inputRef} />
      <p>hello</p> */}
    </Layout>
  );
}
