/* props is object so we can also destructure object */

// function Name(props) {
//   return <h2>My name is {props.name}</h2>;
// }

function Name({ name }) {
  return <h2>My name is {name}</h2>;
}

export default Name;
