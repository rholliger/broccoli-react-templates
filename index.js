var Filter = require("broccoli-filter");
var convertTemplateToReact = require("react-templates/src/reactTemplates").convertTemplateToReact;

function ReactTemplatesFilter(inputTree, options) {
    if (!(this instanceof ReactTemplatesFilter)) {
        return new ReactTemplatesFilter(inputTree, options);
    }

    Filter.call(this, inputTree, options);
    this.options = options || {};
}

ReactTemplatesFilter.prototype = Object.create(Filter.prototype);
ReactTemplatesFilter.prototype.constructor = ReactTemplatesFilter;
ReactTemplatesFilter.prototype.targetExtension = "js";

ReactTemplatesFilter.prototype.processString = function(string) {
    return convertTemplateToReact(string, {
        modules: "es6",
        name: "template",
        defines: {}
    });
};

module.exports = ReactTemplatesFilter;