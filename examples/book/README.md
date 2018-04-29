# Creating a PDF book with ReLaXed

This directory contains the sources of a Book written with ReLaXed.

> Master document: [``book.pug``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/book/book.pug). <br/>
Stylesheet: [``book.scss``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/book/book.scss).


<p align=center><img src="https://github.com/RelaxedJS/ReLaXed-examples/raw/master/examples/book/book_screenshot.png"/></p>

Some highlights:

- Notice how each chapter is written in its own file, and while the master document uses the Pug language, chapters are actually written in Markdown.
- This is an nice example of how just a few lines of CSS can shape a document and give it a particular feel.


Issues you may want to know about:

- Because ReLaXed.js is using Google Chrome there is no known way to have different margins accross the pages. Because of that, you have to choose between (1) white margins on every page, which means no full-page image, in particular no full-page cover, or (2) no margins on any page, which means no page numbers at the bottom.

- PDF is often not the best format for publishing a book today. EPUB (which is basically HTML) is more adapted.
