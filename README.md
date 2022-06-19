# a11y The Best HTML Practices

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/a11y-html-best-practices)

## 1 - Inert Polyfill

It prevents some elements with its children to be selected with tab key if it is not exist in the visible area at the page. For example; if you have a hidden hamburger menu and if your user is a keyboard user, when he navigates the page with `TAB` key, `inert` prevents it to be selected with this key.

This feature is also in development for native support;

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)

Github Repository:

[https://github.com/WICG/inert](https://github.com/WICG/inert)
