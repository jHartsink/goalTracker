import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/footer.css";

export default function Footer({ keepCount }) {
  return (
    <>
      <div className="footer">
        <button type="button" className="submit-button" variant="link">
          {keepCount()}/9
        </button>
      </div>
    </>
  );
}
