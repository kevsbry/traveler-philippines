import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="social-media">
      <FontAwesomeIcon className="social-icon" icon={faYoutube} />
      {/* <FontAwesomeIcon className="social-icon" icon={faInstagram} /> */}
      <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
    </div>
  );
});

export default Social;
