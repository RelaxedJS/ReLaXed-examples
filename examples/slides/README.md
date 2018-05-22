# PDF slideshow with Relaxed.JS

This directory contains a sample slideshow edited with ReLaXed.

> Master document: [``slides.pug``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/slides/slides.pug). <br/>
Stylesheet: [``slides.scss``](https://github.com/RelaxedJS/ReLaXed-examples/blob/master/examples/slides/slides.scss).

<p align=center><img src="https://github.com/RelaxedJS/ReLaXed-examples/raw/master/examples/slides/slides_screenshot.png"/></p>

This example and its documentation are work in progress, you may come back later. In the mean time, you can have a look at [this real-life slideshow](https://github.com/Edinburgh-Genome-Foundry/egf-shared-documents/raw/master/slideshows/eastbio_dundee_2018/sample.pdf) (6.5M), and [its source](https://github.com/Edinburgh-Genome-Foundry/egf-shared-documents/tree/master/slideshows/eastbio_dundee_2018/), for an example of what ReLaXed is good at.


Some highlights:

- It is easy to add an element to all of your slides at once (for instance a logo, a watermark, a copyright notice). Here is the code to add a red semi-transparent "CONFIDENTIAL" rectangle at the bottom left of all your slide:

```pug
// At the top of your slideshow.pug file
.confidential CONFIDENTIAL
```

```css
// In your CSS
.confidential {
  position: fixed;
  font-weight: bold;
  margin-top: 520px;
  margin-left: 10px;
  padding: 0.5em;
  color: #ff000033;
  border-radius: 0.5em;
  border: 5px solid #ff000033;
}
```
