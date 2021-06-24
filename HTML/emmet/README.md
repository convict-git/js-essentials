# Learning emmet to speed up the coding process

- use `!` for adding boiler plate code for html

- Just write the tag and it will complete it without the need of closing it or adding angular brackets

- To add class and id values to some tag, say `section`, `section.class-name` will expland to `<section class="class-name"></section>, placing the cursor between the opening and closing tags. Similarly, using `section#id-value`will expand to `<section id="id-value"></section>`. It's much easier with `div`s. `.class-name` will expand to`<div class="class-name"></div>`and similarly for id values with`#`.

- Nesting can be done easily using `>`. So, `.parent-class#id-value>.child-class` will expand to

```html
<div class="parent-class" id="id-value">
  <div class="child-class"></div>
</div>
```

- Adding child nodes using `+` and multipliers using `*`. Eg. `.flex-parent>.flex-child+.flex-child#special-value` will expand to

```html
<div class="flex-parent">
  <div class="flex-child"></div>
  <div class="flex-child" id="special-value"></div>
</div>
```

and `.flex-parent>.flex-child*3` will expand to

```html
<div class="flex-parent">
  <div class="flex-child"></div>
  <div class="flex-child"></div>
  <div class="flex-child"></div>
</div>
```

Multipliers are specially useful in the case of list. So eg. `ul>li*4` will expand to

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

- You can use `()` to do things like `(p>lorem20)*5`
