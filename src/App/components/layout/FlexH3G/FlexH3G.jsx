<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./FlexH3G.module.css";


const FlexH3G = (props) => {
    return (
      <div className={styles.FlexH3G} 
      data-testid="FlexH3G">
       {props.children}
      </div>
    );
  };

  FlexH3G.propTypes = {

    children: PropTypes.any.isRequired,
  };

FlexH3G.defaultProps = {
children : <div>FlexH3G layout empty component</div>,

=======
import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexH3G.module.css";

const FlexH3G = (props) => {
  return (
    <div className={styles.FlexH3G} data-testid="FlexH3G">
      {props.children}
    </div>
  );
};

FlexH3G.propTypes = {
  children: PropTypes.any.isRequired,
};
FlexH3G.defaultProps = {
  children: <div>FlexH3G layout empty component</div>,
>>>>>>> aabc50c776e3e4dba84186f97ac48605f4babc70
};

export default FlexH3G;
