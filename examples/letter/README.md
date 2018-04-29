# Creating a PDF letter with ReLaXed

This directory contains a sample letter created with ReLaXed.

> Master document: [``letter.pug``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/letter/letter.pug). <br/>
Stylesheet: [``letter.scss``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/letter/letter.scss).

<p align=center><img src="https://github.com/RelaxedJS/ReLaXed-examples/raw/master/examples/letter/letter_screenshot.png"/></p>



Some highlights:

- Just a few lines of CSS are enough to place the logo, recipient, signature, etc. For the little story, ReLaXed was written out of frustration at how difficult it is to do the same using LaTeX.
- We define classes such as ``.name``, ``.address``, etc. even though these classes are not used in CSS, just to make the document's source more explicit and easier to understand to a newcomer.
