import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const templatNameInitialState = {};
const TemplateName = (props) => {
  useEffect(() => {
    console.log('montage template');
  }, [])
  const [state,setState] = useState(templatNameInitialState);
  return (

    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};
TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
