import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";
import "./reactModal.css"

export default function ReactModal({
  show,
  onHide,
  prefix,
  size,
  centered,
  header,
  children,
  footer,
}) {
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [closeOnEscapeKeyDown]);

  const containerClasses = `react_modal ${prefix} ${show ? "show" : "fade"} ${
    centered ? "centered" : ""
  } `;
  const contentClasses = `modal_content ${size}`;

  return (
    <div className={containerClasses} onClick={onHide}>
      <div className={contentClasses} onClick={(e) => e.stopPropagation()}>
        {header && header}
        {children}
        {footer && footer}
      </div>
    </div>
  );
}

ReactModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  size: PropTypes.string,
  centered: PropTypes.bool,
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

ReactModal.defaultProps = {
  prefix: "",
  size: "md",
  centered: false,
  header: null,
  children: null,
  footer: null,
};
