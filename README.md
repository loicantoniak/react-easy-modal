# react-easy-modal

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [Author](#author)
* [License](#license)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save react-easy-modal
    $ yarn add react-easy-modal
    
## Usage

Here is a simple example of react-easy-modal being used in an app :

```jsx
import React, { useState } from "react";
import ReactEasyModal from "react-easy-modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ReactEasyModal
      prefix="custom_modal"
      size="lg"
      centered
      show={showModal}
      onHide={() => setShowModal(false)}
      header={<div className="closeButton" onClick={() => setShowModal(false)} />}
    >
      <div className={style.content}>
        <p>Inside modal !</p>
      </div>
    </ReactEasyModal>
  );
}

export default App;
```
## Options

#### show `boolean`

Control modal state from parent component

#### centered `boolean` (default: false)

return true if you want the modal in the center of the window

#### size `boolean` (default: "md")

differents modal's sizes, possibilities : "xs", "sm", "md", "lg", "full"

#### onHide: `Function`

Handle modal closing. Should return true if you allow closing

#### prefix: `string`

ClassName for custom modal component

#### header: `JSX.Element | string`

Modal heading

#### footer: `JSX.Element | string`

Place here your actions

#### children: `JSX.Element | string`

Modal body

## Author

- **Loïc Antoniak** _alias_ [@loicantoniak](https://github.com/loicantoniak)

## License
[MIT](https://choosealicense.com/licenses/mit/)