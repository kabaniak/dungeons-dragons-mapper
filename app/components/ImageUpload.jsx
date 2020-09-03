const React = require("react");

/* styling */
const imgStyle = {
  height: '100%',
  width: '100%',
  border: 'hidden'
}
const selectorStyle = {
  border: 'hidden'
}

/* the main page for the index route of this app */
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

  return (
    <div>
      <input type="file" id="fileSelector" style={selectorStyle}/>
      
      <img id="myImg" alt="" style={imgStyle}/>
    </div>
  );
};

module.exports = ImageUpload;
