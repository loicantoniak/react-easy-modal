# react-modal-component

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [Author](#author)
* [License](#license)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save react-modal-component
    $ yarn add react-modal-component
    
## Usage

Here is a simple example of react-modal-component being used in an app :

```jsx
import React, { useState } from "react";
import ReactModal from "react-modal-component";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ReactModal
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
    </ReactModal>
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