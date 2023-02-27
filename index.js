const Box = (props) => {
  const { className, boxNames } = props;
  return <p className={`box-container ${className}`}>{boxNames}</p>;
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="sub-container">
      <Box className="box1" boxNames="Small" />
      <Box className="box2" boxNames="Medium" />
      <Box className="box3" boxNames="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
