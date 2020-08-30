"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var country_list_1 = require("./components/country-list");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(country_list_1["default"], null)));
}
exports["default"] = App;
