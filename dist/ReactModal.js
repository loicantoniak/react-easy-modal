"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactModal;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./reactModal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ReactModal(_ref) {
  let {
    show,
    onHide,
    prefix,
    size,
    centered,
    header,
    children,
    footer
  } = _ref;
  const closeOnEscapeKeyDown = (0, _react.useCallback)(e => {
    if ((e.charCode || e.keyCode) === 27) {
      onHide();
    }
  }, [onHide]);
  (0, _react.useEffect)(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  }, [closeOnEscapeKeyDown]);
  const containerClasses = "react_modal ".concat(prefix, " ").concat(show ? "show" : "fade", " ").concat(centered ? "centered" : "", " ");
  const contentClasses = "modal_content ".concat(size);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: containerClasses,
    onClick: onHide
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: contentClasses,
    onClick: e => e.stopPropagation()
  }, header && header, children, footer && footer));
}
ReactModal.propTypes = {
  show: _propTypes.default.bool.isRequired,
  onHide: _propTypes.default.func.isRequired,
  prefix: _propTypes.default.string,
  size: _propTypes.default.string,
  centered: _propTypes.default.bool,
  header: _propTypes.default.node,
  children: _propTypes.default.node,
  footer: _propTypes.default.node
};
ReactModal.defaultProps = {
  prefix: "",
  size: "md",
  centered: false,
  header: null,
  children: null,
  footer: null
};