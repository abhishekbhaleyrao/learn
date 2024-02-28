<div id="top"></div><br />

- [Interview Questions](#interview-questions)
  - [What is the need of mentioning \<! DOCTYPE HTML\>](#what-is-the-need-of-mentioning--doctype-html)
    - [HTML 5](#html-5)
    - [HTML 4.01 Strict](#html-401-strict)
    - [HTML 4.01 Transitional](#html-401-transitional)
    - [HTML 4.01 Frameset](#html-401-frameset)
    - [XHTML 1.0 Strict](#xhtml-10-strict)
    - [XHTML 1.0 Transitional](#xhtml-10-transitional)
    - [XHTML 1.0 Frameset](#xhtml-10-frameset)
    - [XHTML 1.1](#xhtml-11)
  - [What are the different kinds of Doctypes available?](#what-are-the-different-kinds-of-doctypes-available)
  - [What’s one main result if you do not specify a doctype in an HTML page?](#whats-one-main-result-if-you-do-not-specify-a-doctype-in-an-html-page)
  - [What is HTML5?](#what-is-html5)
  - [What are tags?](#what-are-tags)
  - [List few input type attributes that are new in HTML5.](#list-few-input-type-attributes-that-are-new-in-html5)
  - [How to insert a copyright symbol?](#how-to-insert-a-copyright-symbol)
  - [What are some of the key new features in HTML5?](#what-are-some-of-the-key-new-features-in-html5)
  - [What are “web workers”?](#what-are-web-workers)
  - [Briefly describe the correct usage of the following HTML5 semantic elements: \<header\>, \<article\>, \<section\>, \<footer\>](#briefly-describe-the-correct-usage-of-the-following-html5-semantic-elements-header-article-section-footer)
  - [What is HTML5 Web Storage? Explain localStorage and sessionStorage.](#what-is-html5-web-storage-explain-localstorage-and-sessionstorage)
  - [What is the difference between span and div?](#what-is-the-difference-between-span-and-div)
  - [What is SVG?](#what-is-svg)
  - [What is canvas in HTML 5?](#what-is-canvas-in-html-5)
  - [What are some of the common lists that can be used when designing a page?](#what-are-some-of-the-common-lists-that-can-be-used-when-designing-a-page)
  - [How do you insert a comment in HTML?](#how-do-you-insert-a-comment-in-html)
  - [How do you insert a copyright symbol on a browser page?](#how-do-you-insert-a-copyright-symbol-on-a-browser-page)
  - [How do you create links to sections within the same page?](#how-do-you-create-links-to-sections-within-the-same-page)
  - [What are two types of Web Storage in HTML5?](#what-are-two-types-of-web-storage-in-html5)
  - [What is HTML5 Web Storage? Explain localStorage and sessionStorage.](#what-is-html5-web-storage-explain-localstorage-and-sessionstorage-1)
  - [Explain five new input types provided by HTML5 for forms?](#explain-five-new-input-types-provided-by-html5-for-forms)
  - [How can a static HTML page redirect the visited a new page?](#how-can-a-static-html-page-redirect-the-visited-a-new-page)
  - [What is an API in HTML5?](#what-is-an-api-in-html5)
  - [What is a contenteditable attribute?](#what-is-a-contenteditable-attribute)
  - [What is the difference between HTML and XHTML?](#what-is-the-difference-between-html-and-xhtml)
  - [What is a manifest file in HTML?](#what-is-a-manifest-file-in-html)
  - [What is Web SQL?](#what-is-web-sql)
  - [What were some of the key goals and motivations for the HTML5 specification?](#what-were-some-of-the-key-goals-and-motivations-for-the-html5-specification)
  - [What is MathML in HTML5?](#what-is-mathml-in-html5)
  - [Explain WHATWG.](#explain-whatwg)
  - [Explain Microdata in HTML5.](#explain-microdata-in-html5)
  - [Can a \<section\> contain \<article\> elements? Can an \<article\> contain \<section\> elements? Provide usage examples.](#can-a-section-contain-article-elements-can-an-article-contain-section-elements-provide-usage-examples)
  - [Can a web page contain multiple \<header\> elements? What about  elements?](#can-a-web-page-contain-multiple-header-elements-what-about--elements)
  - [Give a simple implementation of the \<video\> tag to embed a video stored at http://www.example.com/amazing\_video.mp4. Give the video a width of 640 pixels by 360 pixels. Provide the user with controls.](#give-a-simple-implementation-of-the-video-tag-to-embed-a-video-stored-at-httpwwwexamplecomamazing_videomp4-give-the-video-a-width-of-640-pixels-by-360-pixels-provide-the-user-with-controls)
  - [Write the code necessary to create a 300 pixel by 300 pixel \<canvas\>. Within it, paint a blue 100 pixel by 100 pixel square with the top-left corner of the square located 50 pixels from both the top and left edges of the canvas.](#write-the-code-necessary-to-create-a-300-pixel-by-300-pixel-canvas-within-it-paint-a-blue-100-pixel-by-100-pixel-square-with-the-top-left-corner-of-the-square-located-50-pixels-from-both-the-top-and-left-edges-of-the-canvas)


<br />

# Interview Questions

## What is the need of mentioning <! DOCTYPE HTML>

- <!DOCTYPE HTML> indicates the version of HTML which in this case is 5.
- Always add the <!DOCTYPE> declaration to your HTML documents, so that the browser knows what type of document to expect.
- The earlier versions like HTML4 were based on Standard Generalized Markup Language (SGML) and required a Document Type Definition (DTD).
- HTML5 however, is not based on SGML and doesn’t need a DTD.

  ### HTML 5

  ```html
  <!DOCTYPE html>
  ```

  ### HTML 4.01 Strict

  - This DTD contains all HTML elements and attributes, but does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
  ```

  ### HTML 4.01 Transitional

  - This DTD contains all HTML elements and attributes, INCLUDING presentational and deprecated elements (like font). Framesets are not allowed.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  ```

  ### HTML 4.01 Frameset

  - This DTD is equal to HTML 4.01 Transitional, but allows the use of frameset content.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
  ```

  ### XHTML 1.0 Strict

  - This DTD contains all HTML elements and attributes, but does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed. The markup must also be written as well-formed XML.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">
  ```

  ### XHTML 1.0 Transitional

  - This DTD contains all HTML elements and attributes, INCLUDING presentational and deprecated elements (like font). Framesets are not allowed. The markup must also be written as well-formed XML.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
  ```

  ### XHTML 1.0 Frameset

  - This DTD is equal to XHTML 1.0 Transitional, but allows the use of frameset content.

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN">
  ```

  ### XHTML 1.1

  - This DTD is equal to XHTML 1.0 Strict, but allows you to add modules (for example to provide ruby support for East-Asian languages).

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN">
  ```

## What are the different kinds of Doctypes available?

- The three kinds of Doctypes:
  1. Strict Doctype
  2. Transitional Doctype
  3. Frameset Doctype

## What’s one main result if you do not specify a doctype in an HTML page?

- New HTML5-specific tags will not be interpreted by the browser.

<br />
<br />

## What is HTML5?

- HTML 5 is a new standard for HTML whose main target is to deliver everything without need to any additional plugins like flash, Silverlight etc. It has everything from animations, videos, rich GUI etc.
- HTML5 is cooperation output between World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG).

<br />
<br />

## What are tags?

- Content is placed in between HTML tags in order to properly format it. It makes use of the less than symbol (\<) and the greater than symbol (\>). A slash symbol is also used as a closing tag. For example:

<br />
<br />

## List few input type attributes that are new in HTML5.

- An input tag can take some attributes based on the requirement. ie `<input type="text">` creates a textbox that takes text/number/special characters into it. The attribute type can take more values, these are:
  - Datetime: Gives a datetime accepted textbox.
  - Placeholder: Places an editable text in the textbox.
  - Number: Takes only numbers and no text and special characters.
  - Tel: Takes inputs like a telephone number.
  - Email: Takes text with email format.
  - Text: Takes text
- Example:
  ```html
  <input type="text" />
  ```

## How to insert a copyright symbol?

- As there is no direct key to type and insert the copyright symbol in a web page, it has to be given by combining different characters.
- This can be done in multiple ways like:
- `&copy;`
- `&#169;`
- Output: ©

## What are some of the key new features in HTML5?

- Improved support for embedding graphics, audio, and video content via the new \<canvas\>, \<audio\>, and \<video\> tags.
- Extensions to the JavaScript API such as geolocation and drag-and-drop as well for storage and caching.
- Introduction of “web workers”.
- Several new semantic tags were also added to complement the structural logic of modern web applications. These include the \<main\>, \<nav\>, \<article\>, \<section\>, \<header\>, \<footer\>, and \<aside\> tags.
- New form controls, such as \<calendar\>, \<date\>, \<time\>, \<email\>, \<url\>, and \<search\>.
- Apply to Join Toptal's Development Network and enjoy reliable, steady, remote Freelance HTML5 Developer Jobs

<br />
<br />

## What are “web workers”?

- A web worker is a script that runs in the background (i.e., in another thread) without the page needing to wait for it to complete. The user can continue to interact with the page while the web worker runs in the background. Workers utilize thread-like message passing to achieve parallelism.
- Web workers at long last bring multi-threading to JavaScript.
- A web worker is a script that runs in the background (i.e., in another thread) without the page needing to wait for it to complete.
- The user can continue to interact with the page while the web worker runs in the background.
- Workers utilize thread-like message passing to achieve parallelism.

<br />
<br />

## Briefly describe the correct usage of the following HTML5 semantic elements: \<header\>, \<article\>, \<section\>, \<footer\>

- The \<header\> element is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.
- The \<article\> element is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it’s meaining. Individual blog posts or news stories are good examples.
- The \<section\> element is a flexible container for holding content that shares a common informational theme or purpose.
- The \<footer\> element is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

<br />
<br />

## What is HTML5 Web Storage? Explain localStorage and sessionStorage.

- With HTML5, web pages can store data locally within the user’s browser.
- Earlier, this was done with cookies. However, Web Storage is more secure and faster. The data is not included with every server request, but used ONLY when asked for.
- The data is stored in name/value pairs, and a web page can only access data stored by itself. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
- The difference between localStorage and sessionStorage involves the lifetime and scope of the storage.
- Data stored through localStorage is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it. SessionStorage has the same lifetime as the top-level window or browser tab in which the script that stored it is running. When the window or tab is permanently closed, any data stored through sessionStorage is deleted.
- Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects. But sessionStorage is also scoped on a per-window basis. If a user has two browser tabs displaying documents from the same origin, those two tabs have separate sessionStorage data: the scripts running in one tab cannot read or overwrite the data written by scripts in the other tab, even if both tabs are visiting exactly the same page and are running exactly the same scripts.

<br />
<br />

## What is the difference between span and div?

- The difference is that span gives the output with display: inline and div gives the output with display: block.
- span is used when we need our elements to be shown in a line, one after the other.

<br />
<br />

## What is SVG?

- SVG stands for scalable vector graphics. It’s a text based graphic language which draws images using text, lines, dots etc. This makes it lightweight and renders faster.

<br />
<br />

## What is canvas in HTML 5?

- Canvas is an HTML area on which you can draw graphics.

<br />
<br />

## What are some of the common lists that can be used when designing a page?

1. Ordered list
2. Unordered list
3. Definition list
4. Menu list
5. Directory list

<br />
<br />

## How do you insert a comment in HTML?

- Comments in HTML begins with “\<!–“nd ends with “–\>”. For example: \<!-- A SAMPLE COMMENT --\>

<br />
<br />

## How do you insert a copyright symbol on a browser page?

- To insert the copyright symbol, you need to type &copy; or & #169; in an HTML file.

<br />
<br />

## How do you create links to sections within the same page?

- Links can be created using the \<a\> tag, with referencing through the use of the number (#) symbol. For example, you can have one line as \<a href=”#topmost”\>BACK TO TOP\</a\>, which would result in the words “BACK TO TOP” appearing on the webpage and links to a bookmark named topmost. You then create a separate tag command like \<a name=”topmost”\> somewhere on the top of the same webpage so that the user will be linked to that spot when he clicked on “BACK TO TOP”.

<br />
<br />

## What are two types of Web Storage in HTML5?

- Two storage types of HTML5 are:
- Session Storage: It stores data of current session only. It means that the data stored in session storage clear automatically when the browser is closed.
- Local Storage: Local storage is another type of HTML5 Web Storage. In local storage, data is not deleted automatically when the current browser window is closed.

<br />
<br />

## What is HTML5 Web Storage? Explain localStorage and sessionStorage.

-     With HTML5, web pages can store data locally within the user’s browser.
-     Earlier, this was done with cookies. However, Web Storage is more secure and faster. The data is not included with every server request, but used ONLY when asked for.
-     The data is stored in name/value pairs, and a web page can only access data stored by itself. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
-     The difference between localStorage and sessionStorage involves the lifetime and scope of the storage.
-     Data stored through localStorage is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it. SessionStorage has the same lifetime as the top-level window or browser tab in which the script that stored it is running. When the window or tab is permanently closed, any data stored through sessionStorage is deleted.
-     Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects. But sessionStorage is also scoped on a per-window basis. If a user has two browser tabs displaying documents from the same origin, those two tabs have separate sessionStorage data: the scripts running in one tab cannot read or overwrite the data written by scripts in the other tab, even if both tabs are visiting exactly the same page and are running exactly the same scripts.

## Explain five new input types provided by HTML5 for forms?

- Following are the important, new data types offered by HTML5:

- Date: It allows the user to select a date.
- datetime-local: This input type allows the user to select a date and time without time zone.
- datetime: This input type allows the user to select a date and time with time zone.
- month: It enables the user to select a month and year
- email: These input fields used to contain an e-mail address.

<br />
<br />

## How can a static HTML page redirect the visited a new page?

- The meta tag has an attribute called URL which takes you to a redirected link.

## What is an API in HTML5?

- API stands for Application Programming Interfaces and is a way to create applications. They use pre-built components. Using the available APIs, developers can integrate the features into their websites.
  List the API’s available in HTML5.
- The available API’s in HTML are:

  - DOM Level 1
  - DOM Level 2 Core
  - DOM Level 2 HTML
  - DOM Level 3

- New API's in HTML5 are:
  - HTML Geolocation
  - HTML Drag and Drop
  - HTML Local Storage
  - HTML Application Cache
  - HTML Web Workers
  - HTML SSE
  - Constraint Validation API
  - Text Track API
  - Media API
  - Command API
  - User Interaction
  - Data Transfer API
  - History API
  - Application Cache API

## What is a contenteditable attribute?

- This attribute is a new feature in HTML5 using which any element can be edited directly from the browser.
- `<p contenteditable="true">` This is a paragraph. It is editable. Try to change this text.</p>

## What is the difference between HTML and XHTML?

- HTML stands for HyperText Markup Language
- XHTML stands for eXtensible HyperText Markup Language which is defined in XML format.

## What is a manifest file in HTML?

- With the introduction of application cache, a web application is accessible without an internet connection. Every page of the web application should hold the manifest attribute to get cached.
- The cache manifest in HTML5 is a software storage feature which provides the ability to access a web application even without a network connection.

## What is Web SQL?

- HTML5 has introduced a database connection to store values on the client side. Web SQL is such a database in the browser which holds client information. It is important to note that Web SQL does not store critical data (like passwords) in it.

## What were some of the key goals and motivations for the HTML5 specification?

- HTML5 was designed to replace both HTML 4, XHTML, and the HTML DOM Level 2.
- Major goals of the HTML specification were to:
- Deliver rich content (graphics, movies, etc.) without the need for additional plugins (e.g., Flash).
- Provide better semantic support for web page structure through the introduction of new structural element tags.
- Provide a stricter parsing standard to simplify error handling, ensure more consistent cross-browser behavior, and simplify backward compatibility with documents written to older standards.
- Provide better cross-platform support (i.e., to work well whether running on a PC, Tablet, or Smartphone).

## What is MathML in HTML5?

- MathML stands for Mathematical Markup Language and is used to show mathematical and scientific content on the web page. This expression should be inserted in a math tag.

## Explain WHATWG.

- WHATWG stands for Web HyperText Application Technology Working Group which is an organization that develops and also maintains the HTML and API for web applications.

## Explain Microdata in HTML5.

- Using Microdata, the metadata is nested within existing content on web pages. Search engines extract the microdata from a web page to provide a good browsing experience.

## Can a \<section\> contain \<article\> elements? Can an \<article\> contain \<section\> elements? Provide usage examples.

- The answer to both questions is yes; i.e., a \<section\> can contain \<article\> elements, and an \<article\> can contain \<section\> elements.
- For example, a personal dashboard page might contain a \<section\> for social network interactions as well as a \<section\> for the latest news articles, the latter of which could contain several \<article\> elements.
- Conversely, an \<article\> might contain a \<section\> at the end for reader comments.

## Can a web page contain multiple \<header\> elements? What about <footer> elements?

- Yes to both. In fact, both the \<header\> and \<footer\> tags are designed to serve their respective purposes in relation to whatever their parent “section” may be. So not only can the page \<body\> contain a header and a footer, but so can every \<article\> and \<section\> element. In fact, a \<header\> should be present for all of these, although a \<footer\> is not always necessary.

## Give a simple implementation of the \<video\> tag to embed a video stored at http://www.example.com/amazing_video.mp4. Give the video a width of 640 pixels by 360 pixels. Provide the user with controls.

- Here is one simple implementation:

```html
<video
  src="http://www.example.com/amazing_video.mp4"
  width="640"
  height="360"
  controls
></video>
Alternatively, the source file may be indicated with a separate
<source />
tag inside the
<video>
  element, as in:
  <video width="640" height="360" controls>
    <source src="http://www.example.com/amazing_video.mp4" />
  </video>
</video>
```

## Write the code necessary to create a 300 pixel by 300 pixel \<canvas\>. Within it, paint a blue 100 pixel by 100 pixel square with the top-left corner of the square located 50 pixels from both the top and left edges of the canvas.

- Here is one simple implementation:

```html
<canvas id="c" width="300" height="300"></canvas>
<script>
  var canvas = document.getElementById("c");
  var drawing_context = canvas.getContext("2d");
  drawing_context.fillStyle = "blue";
  drawing_context.fillRect(50, 50, 100, 100);
</script>
```
