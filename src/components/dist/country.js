"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var CountryStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 5px;\n  box-shadow: 0 0 7px 2px rgb(0, 0, 0, 0.03);\n  margin: 1em;\n  overflow: hidden;\n  text-align: left;\n  width: 264px;\n  img {\n    height: 160px;\n    object-fit: cover;\n    width: 100%;\n  }\n  .details {\n    padding: 1.5em;\n  }\n  h2 {\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 1rem;\n    margin: 0;\n  }\n  p {\n    font-size: 0.9em;\n    margin-bottom: 0.5rem;\n  }\n"], ["\n  border-radius: 5px;\n  box-shadow: 0 0 7px 2px rgb(0, 0, 0, 0.03);\n  margin: 1em;\n  overflow: hidden;\n  text-align: left;\n  width: 264px;\n  img {\n    height: 160px;\n    object-fit: cover;\n    width: 100%;\n  }\n  .details {\n    padding: 1.5em;\n  }\n  h2 {\n    font-size: 18px;\n    font-weight: 700;\n    margin-bottom: 1rem;\n    margin: 0;\n  }\n  p {\n    font-size: 0.9em;\n    margin-bottom: 0.5rem;\n  }\n"])));
var Country = function (props) {
    return (react_1["default"].createElement(CountryStyled, null,
        react_1["default"].createElement("img", { loading: "lazy", src: props.flag, alt: "flag" }),
        react_1["default"].createElement("div", { className: "details" },
            react_1["default"].createElement("h2", null, props.name),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("strong", null, "Population: "),
                props.population),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("strong", null, "Region: "),
                props.region),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("strong", null, "Capital: "),
                props.capital))));
};
exports["default"] = Country;
var templateObject_1;
