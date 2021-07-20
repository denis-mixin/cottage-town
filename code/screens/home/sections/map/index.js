import React from "react";
import Img from "../../../../common/img/Img";
import { handleUrl } from "../../../../utils/url";

function Map({ _body, _relativeURL, _ID, btn, image }) {
  return (
    <div className="map section">
      <Img src={handleUrl(image, _relativeURL, _ID)} customClassName="map-bg" />
      <div className="map-text">
        {_body}
        <button className="map-link" className="btn">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Map;
