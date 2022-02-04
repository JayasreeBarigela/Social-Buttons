const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return ( 
      <button className={className}>{text}</button>
      );
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-container">
      <Button className="btn1" text="like"} />
      <Button className="btn2" text="Comment"} />
      <Button className="btn3" text="Share"} />
    </div>
  </div> 
);

ReactDOM.render(element , document.getElementById("root"));
