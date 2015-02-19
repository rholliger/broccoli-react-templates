# broccoli-react-templates

A generic filter for Broccoli that turns react template files into ES6
JavaScript modules that can be imported in React components.

## Installation

```bash
npm install --save broccoli-react-templates
```

## Usage Example

```js
var filterReactTemplates = require("broccoli-react-templates");
tree = filterReactTemplates(tree, {
  extensions: ["react"]
});
```

Given a file `template.react`

```html
<rt-require dependency="comps/myComp" as="MyComp"/>
<rt-require dependency="utils/utils" as="utils"/>
<MyComp rt-repeat="item in items">
    <div>{utils.toLower(item.name)}</div>
</MyComp>
```

this function will emit a file `template.js`:

```js
import { React } from 'react/addons';
import { _ } from 'lodash';
import { MyComp } from 'comps/myComp';
import { utils } from 'utils/utils';
function repeatItem1(item, itemIndex) {
    return React.createElement(MyComp, {}, React.createElement('div', {}, utils.toLower(item.name)));
}
export default function () {
    return _.map(items, repeatItem1.bind(this));
};
```

## License

Licensed under the MIT license.