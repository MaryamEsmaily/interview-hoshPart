import React from "react";
import { Icon } from "@chakra-ui/react";

function CloseIcon(props) {
  return (
    <Icon viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M15.5335 17.4001L0.599957 2.46653C0.0897277 1.9563 0.0897277 1.11007 0.599957 0.599835C1.11019 0.0896057 1.95642 0.0896057 2.46665 0.599835L17.4002 15.5334C17.9104 16.0436 17.9104 16.8899 17.4002 17.4001C16.89 17.9103 16.0437 17.9103 15.5335 17.4001Z"
        fill="currentColor"
      />
      <path
        d="M0.600081 17.4001C0.0898514 16.8899 0.0898509 16.0436 0.600081 15.5334L15.5336 0.599835C16.0439 0.0896057 16.8901 0.0896057 17.4003 0.599835C17.9106 1.11007 17.9106 1.9563 17.4003 2.46653L2.46677 17.4001C1.95655 17.9103 1.11031 17.9103 0.600081 17.4001Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default CloseIcon;
