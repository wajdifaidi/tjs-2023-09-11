<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./FlexW1G.module.css";


const FlexW1G = (props) => {
    return (
      <div className={styles.FlexW1G} 
      data-testid="FlexW1G">
       {props.children}
      </div>
    );
  };

  FlexW1G.propTypes = {

    children: PropTypes.any.isRequired,
  };

FlexW1G.defaultProps = {
children : <div>FlexW1G layout empty component</div>,

=======
import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexW1G.module.css";

const FlexW1G = (props) => {
  return (
    <div className={styles.FlexW1G} data-testid="FlexW1G">
      {props.children}
    </div>
  );
};

FlexW1G.propTypes = {
  children: PropTypes.any.isRequired,
};
FlexW1G.defaultProps = {
  children: <div>FlexW1G layout empty component</div>,
>>>>>>> aabc50c776e3e4dba84186f97ac48605f4babc70
};

export default FlexW1G;
