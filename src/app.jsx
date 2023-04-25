import "./app.css"

const Box = ({ header, content }) => {
  return (
    <div className="box">
      <h2> {header}</h2>
      <p> {content}</p>
    </div>
  );
};

export function App() {
  const content = "Lorem ipsum dolor sit amet, duo et nominavi mediocritatem. Putent audiam est ex."
  const header = (char) => `Box ${char}`;
  return (
    <>
      <h1 className="page-header">{"css grid"}</h1>
      <div className="container">
        <Box header={header("A")} content={content}/>
        <Box header={header("B")} content={content}/>
        <Box header={header("C")} content={content}/>
        <Box header={header("D")} content={content}/>
        <Box header={header("E")} content={content}/>
      </div>
    </>
  );
}
