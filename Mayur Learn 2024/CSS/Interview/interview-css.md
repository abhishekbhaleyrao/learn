<div id="top"></div><br />

- [Explain the CSS "box model" or Paradigm](#explain-the-css-box-model-or-paradigm)
- [Explain what elements will match each of the following CSS selectors:](#explain-what-elements-will-match-each-of-the-following-css-selectors)
- [Explain the meaning of each of these CSS units for expressing length:](#explain-the-meaning-of-each-of-these-css-units-for-expressing-length)
- [In CSS3, how would you select:](#in-css3-how-would-you-select)
- [Automatic numbering - Given the following HTML:](#automatic-numbering---given-the-following-html)
- [How could you use CSS to achieve the following automatic numbering:](#how-could-you-use-css-to-achieve-the-following-automatic-numbering)
- [What is RWD?](#what-is-rwd)
- [What is the purpose of the z-index and how is it used?](#what-is-the-purpose-of-the-z-index-and-how-is-it-used)
- [Explain the difference between visibility: hidden and display: none?](#explain-the-difference-between-visibility-hidden-and-display-none)
- [How would you use media queries in a mobile-first approach?](#how-would-you-use-media-queries-in-a-mobile-first-approach)
- [Do you use any CSS preprocessors, and which do you prefer?](#do-you-use-any-css-preprocessors-and-which-do-you-prefer)

<br />

## Explain the CSS "box model" or Paradigm

- The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:

  - Content - The content of the box, where text and images appear
  - Padding - A transparent area surrounding the content (i.e., the amount of space between the border and the content)
  - Border - A border surrounding the padding (if any) and content
  - Margin - A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)

- Each of these properties can be specified independently for each side of the element (i.e., top, bottom, right, left) or fewer values can be specified to apply to multiple sides.
- Example:

```css
/* top   right  bottom left  */
padding: 25px 50px 75px 100px;

/* same padding on all 4 sides: */
padding: 25px;

/* top/bottom padding 25px; right/left padding 50px */
padding: 25px 50px;

/* top padding 25px; right/left padding 50px; bottom padding 75px */
padding: 25px 50px 75px;
```

<br />
<br />

## Explain what elements will match each of the following CSS selectors:

div, p
div p
div > p
div + p
div ~ p

- div, p: Selects all \<div\> elements and all \<p\> elements
- div p: Selects all \<p\> elements that are anywhere inside a \<div\> element
- div > p: Selects all \<p\> elements where the immediate parent is a \<div\> element
- div + p: Selects all \<p\> elements that are placed immediately after a \<div\> element
- div ~ p: Selects all \<p\> elements that are anywhere preceded by a \<div\> element

<br />
<br />

## Explain the meaning of each of these CSS units for expressing length:

cm
em
in
mm
pc
pt
px

- cm - centimeters
- em - elements (i.e., relative to the font-size of the element; e.g., 2 em means 2 times the current font size)
- in - inches
- mm - millimeters
- pc - picas (1 pc = 12 pt = 1/6th of an inch)
- pt - points (1 pt = 1/72nd of an inch)
- px - pixels (1 px = 1/96th of an inch)

<br />
<br />

## In CSS3, how would you select:

1. Every \<a\> element whose href attribute value begins with “https”.
2. Every \<a\> element whose href attribute value ends with ".pdf”.
3. Every \<a\> element whose href attribute value contains the substring “css”.

- Select every \<a\> element whose href attribute value begins with “https”:
  a[href^="https"]

- Select every \<a\> element whose href attribute value ends with ".pdf":
  a[href$=".pdf"]

- Select every \<a\> element whose href attribute value contains the substring "css":
  a[href*="css"]

<br />
<br />

## Automatic numbering - Given the following HTML:

```html
<div id="page">
  <h1>Heading Title</h1>
  <h2>Subheading Title</h2>
  <h2>Subheading Title</h2>
  <h1>Heading Title</h1>
  <h2>Subheading Title</h2>
  <h1>Heading Title</h1>
</div>
```

## How could you use CSS to achieve the following automatic numbering:

1. Heading Title<br/>
   1.1 Subheading Title<br/>
   1.2 Subheading Title<br/>

2. Heading Title<br/>
   2.1 Subheading Title

3. Heading Title<br/>

- The following CSS will achieve this type of automatic numbering:

```css
#page {
  counter-reset: heading;
}
h1:before {
  content: counter(heading) ") ";
  counter-increment: heading;
}
h2 {
  counter-reset: subheading;
}
h2:before {
  content: counter(heading) "." counter(subheading) ") ";
  counter-increment: subheading;
}
```

<br />
<br />

## What is RWD?

- RWD stands for Responsive Web Design.
- This technique is used to display the designed page perfectly on every screen size and device, for example, mobile, tablet, desktop and laptop.
- You don't need to create a different page for each device.

<br />
<br />

## What is the purpose of the z-index and how is it used?

- The z-index helps to specify the stack order of positioned elements that may overlap one another.
- The z-index default value is zero and can take on either a positive or negative number.
- Z-Index can take the following values:
  - Auto: Sets the stack order equal to its parents.
  - Number: Orders the stack order.
  - Initial: Sets this property to its default value (0).
  - Inherit: Inherits this property from its parent element.

<br />
<br />

## Explain the difference between visibility: hidden and display: none?

- visibility: hidden hides the element, but it occupies space and affects the layout of the document.
  - - display: none also hides the element but not occupy space. It will not affect the layout of the document.

<br />
<br />

## How would you use media queries in a mobile-first approach?

- The most common approach is the mobile-first one.
- All styles outside of media queries are targeted at mobile devices.
- Then, through progressively larger media queries, you can style larger screens one step at a time.
- Example:

```css
/* mobile styles */
body {
  font-size: 1em;
}

/* desktop styles */
@media only screen and (min-width: 768px) {
  body {
    font-size: 1.5em;
  }
}
```

<br />
<br />

## Do you use any CSS preprocessors, and which do you prefer?

- If you’re working on a medium to large project, it’d be a good idea to use a CSS preprocessor. They allow you to write more concise CSS, split it up into multiple files and use a large number of very useful functions and mixins (you can even create your own!), along with variables.
- The main players are Sass (also referred to as SCSS), LESS and Stylus, although arguably Sass is the biggest.

<br />
<br />