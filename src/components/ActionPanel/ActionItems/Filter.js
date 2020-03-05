import React from "react";
const styles = {
  input: {
    border: 'none',
    outline: 'none',
  },
  box: {
    border: '1px solid #999'
  },
  icon: {
    color: '#555'
  }
};
export default () => (
  <div style={styles.box}>
    <input type="text" style={styles.input} />
    <span>
      <i className="fa fa-filter" style={styles.icon} aria-hidden="true" />
    </span>
  </div>
);

