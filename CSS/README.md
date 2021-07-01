# CSS

## Points to note

- Never style CSS on `id` rather always use `class`. `id`s are not resusable
- Avoid widths and heights in `em`
- `id` are more specific than `classes`
- Box being floated should always have widths defined otherwise it takes up the whole block and leaves no space for other elements to flow around.
- Read CSS positioning : [brainjar's positioning](http://www.brainjar.com/css/positioning/default3.asp)
- Vertical margin collapsing : [CSS Tricks Collapsing margins](https://css-tricks.com/almanac/properties/m/margin/#collapsing-margins)
- Parent container's height and width are NOT modified by float childrens. This can result in loss of parent's height. We can use `clearfix` to fix this issue.
