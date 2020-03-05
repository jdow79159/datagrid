import React from "react";

export default ({ header }) => (
  <td>
    <a href="#" onClick={e => e.preventDefault()}>
      {header.title}
      <i className="fa fa-filter" aria-hidden="true" />
      <i className="fa fa-long-arrow-down" aria-hidden="true" />
    </a>
  </td>
);
