<h1>This is ecommerce Project.</h1>
<h4>Just fun!</h4>
<br/>
<h3>Font-Awesome-React</h3>
<h4>npm</h4>
<p>npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome</p>
<br/>
<p>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faShoppingCart}

</p>

<p>Using Icons via Individual Use
Again, with this method, you’ll need to explicitly import icons into each component. Here’s a simple example.</p>
<br/> 
<p>import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)
We use Coffee Checker’s App.js to initialize our app and library. Our app’s UI wants to use two individual icons, faCheckSquare and faCoffee. We also add all of the brands in @fortawesome/free-brands-svg-icons to build the showcase of the big companies that fictitiously use “Coffee Checker” over time.

  <br/>
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

Our application also has React components, Beverage and Showcase. After initializing the above library, we don’t have to re-import icons into each of them. We import the FontAwesomeIcon component, and when used, we supply the icon prop an icon name as a string. Here’s how that looks in our functional component, Beverage.js:
<br/>

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Beverage = () => (

  <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div>
)
And here’s the Showcase.js component:

  <br/>
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Showcase = () => (

  <div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!

  </div>
)
<br/>
Icon Syntax
As our examples above show, the syntax to reference an icon in the above components is different than our traditional HTML-based syntax. These are all valid ways to define the icon prop:
<br/>
<FontAwesomeIcon icon="coffee" />
<FontAwesomeIcon icon={['fas', 'coffee']} />
<FontAwesomeIcon icon={['far', 'coffee']} />
<FontAwesomeIcon icon={faCoffee} />
<br/>
Size
<br/>
<FontAwesomeIcon icon="coffee" size="xs" />
<FontAwesomeIcon icon="coffee" size="lg" />
<FontAwesomeIcon icon="coffee" size="6x" />
<br>
fixedWidth
<FontAwesomeIcon icon="coffee" fixedWidth />
Inverse:
<FontAwesomeIcon icon="coffee" inverse />
Icons in a List:

<FontAwesomeIcon icon="coffee" listItem />

Rotating Icons:

<FontAwesomeIcon icon="coffee" rotation={90} />
<FontAwesomeIcon icon="coffee" rotation={180} />
<FontAwesomeIcon icon="coffee" rotation={270} />

Flip horizontally, vertically, or both:

<FontAwesomeIcon icon="coffee" flip="horizontal" />
<FontAwesomeIcon icon="coffee" flip="vertical" />
<FontAwesomeIcon icon="coffee" flip="both" />

Animating Icons:

<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />

Bordered Icons:

<FontAwesomeIcon icon="coffee" border />

Pulled Icons:

<FontAwesomeIcon icon="coffee" pull="left" />
<FontAwesomeIcon icon="coffee" pull="right" />

<a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react"><h2>learn More<h2></a>

 </p>
