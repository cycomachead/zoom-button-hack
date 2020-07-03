# Zoom Button Hack

A bookmarklet to add buttons to Zoom Chats.

## :warning: Disclaimer!

This is injecting JavaScript into a running Zoom application. If you care about security, you should read the contents of `zoom.js`. Right now it does nothing, but...you know...don't inject random code into your meetings without checking it!

...TODO...Screenshot.

Drag as a bookmark.

```
javascript:%24.get('https%3A%2F%2Fraw.githubusercontent.com%2Fcycomachead%2Fzoom-button-hack%2Fmaster%2Fzoom.js'%2C%20code%20%3D%3E%20%7Bconsole.log('code%20loaded')%3Beval(code)%7D)%3B
```

Raw bookmarklet JS:

```js
$.get('https://raw.githubusercontent.com/cycomachead/zoom-button-hack/master/zoom.js', code => {console.log('code loaded');eval(code)});
```
