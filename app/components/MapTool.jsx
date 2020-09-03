const React = require("react");
const ImageUpload = require("./ImageUpload");

/* styling */
const numSelect = {
  width: "50px"
};

const selectLabel = {
  float: "left",
  padding: '0px 10px 0px 0px'
};

const selectSpan = {
  display: "block",
  overflow: "hidden"
};

/* the main page for the index route of this app */
const MapTool = function() {
  return (
    <div>
      <span style={selectSpan}>
        <label for="players" style={selectLabel}>
          Number of players (between 1 and 6):
        </label>
        <input
          type="number"
          id="players"
          name="players"
          min="1"
          max="6"
          style={numSelect}
        />
      </span>
      
      <span style={selectSpan}>
        <label for="npcs" style={selectLabel}>
          Number of NPCs (between 0 and 6):
        </label>
        <input
          type="number"
          id="npcs"
          name="npcs"
          min="0"
          max="6"
          style={numSelect}
        />
      </span>

      <ImageUpload />
    </div>
  );
};

module.exports = MapTool;
