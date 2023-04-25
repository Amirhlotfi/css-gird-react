import "./app.css"
const content = "Lorem ipsum dolor sit amet, duo et nominavi mediocritatem. Putent audiam est ex."


const Box = ({ header, content }) => {
  return (
    <div className="box">
      <h2> {header}</h2>
      <p> {content}</p>
    </div>
  );
};

const ThreeBoxes = () => {
  return (
    <>
        <Box header={"Box A1 "} content={content}/>
        <Box header={"Box A2 "} content={content}/>
        <Box header={"Box A3 "} content={content}/>

    </>
  )
}

export function App() {
  const header = (char) => `Box ${char}`;
  return (
    <>
      <h1 className="page-header">{"css grid"}</h1>
      <div className="container">
        <ThreeBoxes />
        <Box header={header("B")} content={content}/>
        <Box header={header("C")} content={content}/>
        <Box header={header("D")} content={content}/>
        <Box header={header("E")} content={content}/>
      </div>
    </>
  );
}
