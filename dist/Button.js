"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(props) {
  var theme = props.theme,
      icon = props.icon;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(theme, " ").concat(icon && 'icon')
  }, /*#__PURE__*/_react["default"].createElement("span", null, icon), props.children);
};

var _default = Button;
exports["default"] = _default;