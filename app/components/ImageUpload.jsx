const React = require("react");

/* styling */
const imgStyle = {
  position: 'absolute',
  top: '170px',
  left: '25px',
  height: '600px',
  border: 'hidden'
}
const selectorStyle = {
  border: 'hidden'
}
const gridStyle = {
  position: 'absolute',
  top: '170px',
  left: '25px',
  zIndex: '2',
  display: 'flex',
  flexDirection: 'column'
}
const gridRowStyle = {
  border: '1px solid black',
  minWidth: '50px',
  minHeight: '50px',
  display: 'flex',
  flexDirection: 'row'
}
const gridCellStyle = {
  border: '1px solid black',
  minWidth: '50px',
  minHeight: '50px',
  display: 'inline-block'
}

/* function to add the appropriate amount of rows */
function addRow(x){
  let num = [];
  for(let i=0; i<x; i++){num.push(i)}
  return (
    <div id="gridRow" style={gridRowStyle}>
      {num.map(i => addCell())}
    </div>);
}
function addCell(){
  return (<div id="gridItem" style={gridCellStyle} ></div>);
}

/* rendering image upload function*/
const ImageUpload = function() {
  window.addEventListener("load", function() {
    document
      .querySelector('input[type="file"]')
      .addEventListener("change", function() {
        if (this.files && this.files[0]) {
          var img = document.querySelector("img"); // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
      });
  });
  
  let num = [];
  for(let i=0; i<10; i++){num.push(i)}

  return (
    <div>
      <input type="file" id="fileSelector" style={selectorStyle}/>
      
      <img id="myImg" alt="" style={imgStyle}/>
      
      <div id="theGrid" style={gridStyle}>
        {num.map(i => addRow(10))}
      </div>
    </div>
  );
};

module.exports = ImageUpload;
