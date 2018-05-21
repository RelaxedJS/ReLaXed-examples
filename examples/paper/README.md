# Creating a PDF article with ReLaXed

This directory contains a sample scientific paper edited with ReLaXed.

> Master document: [``paper.pug``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/paper/paper.pug). <br/>
Stylesheet: [``paper.scss``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/paper/paper.scss).

<p align=center><img src="https://github.com/RelaxedJS/ReLaXed-examples/raw/master/examples/paper/paper_screenshot.png"/></p>


Some highlights:

- It just takes the CSS ``column-count: 2`` to get a perfectly fine 2-column document, how cool is that !
- The figure here was generated using Python's Matplotlib


Issues you may want to know about:

- If you are using LaTeX to write or edit papers, beware of the following limitations:
  - There is no support for bibliography and citations. Some extensions of markdown allow this but are limited and would require that the full text of the article stands in a single Markdown block.
  - Apparently there is no way to express that a figure should span over 2 columns and should float at the top or bottom of a page, as some LaTeX templates allow.
  - LaTeX still has superior typography, expecially with narrow, column oriented text.
