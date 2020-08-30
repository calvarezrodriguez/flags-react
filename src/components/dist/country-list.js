"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var country_1 = require("./country");
var CountryListStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: var(--background);\n  border: 1px solid red;\n  display: grid;\n  grid-row-gap: 2.3em;\n  justify-content: center;\n  padding: 4em 2em;\n"], ["\n  background: var(--background);\n  border: 1px solid red;\n  display: grid;\n  grid-row-gap: 2.3em;\n  justify-content: center;\n  padding: 4em 2em;\n"])));
var CountryList = function () {
    var _a = react_1.useState([]), countryList = _a[0], setCountryList = _a[1];
    react_1.useEffect(function () {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            setCountryList(data);
            console.log(data);
        })["catch"](function () {
            console.log("Hubo un error");
        });
    });
    return (react_1["default"].createElement(CountryListStyled, null, countryList.map(function (_a) {
        var capital = _a.capital, flag = _a.flag, name = _a.name, population = _a.population, region = _a.region;
        return (react_1["default"].createElement(country_1["default"], { capital: capital, flag: flag, key: name, name: name, population: population, region: region }));
    })));
};
exports["default"] = CountryList;
var templateObject_1;
