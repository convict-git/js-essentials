# Grid Garden

[Link to site](https://codepip.com/games/grid-garden/)

### Level 1

```css
#water {
  grid-column-start: 3;
}
```

### Level 2

```css
#water {
  grid-column-start: 5;
}
```

### Level 3

```css
#water {
  grid-column-start: 1;
  grid-column: 1/4; /* OR grid-column-end: 4; */
}
```

### Level 4

```css
#water {
  grid-column-start: 1;
  grid-column: 2/5; /* OR grid-column-end: 2; funny ? */
}
```

### Level 5

```css
#water {
  grid-column-start: 1;
  grid-column: 1/5; /* OR grid-column-end: -2; neg value */
}
```

### Level 6

```css
#poison {
  grid-column: 4/5;
}
```

### Level 7

```css
#water {
  grid-column-start: 2;
  grid-column-end: span 2; /* span hmm */
}
```

### Level 8

```css
#water {
  grid-column-start: 1;
  grid-column: span 5; /* change */
}
```

### Level 9

```css
#water {
  grid-column-start: 3; /* change */
  grid-column-end: 6;
}
```

### Level 10

```css
#water {
  grid-column: 4/6;
}
```

### Level 11

```css
#water {
  grid-column: 2/5;
}
```

### Level 12

```css
#water {
  grid-row-start: 3;
}
```

### Level 13

```css
#water {
  grid-row: 3/6;
}
```

### Level 14

```css
#poison {
  grid-column: 2/3;
  grid-row: 5/6;
}
```

### Level 15

```css
#water {
  grid-column: 2/6;
  grid-row: 1/6;
}
```

### Level 16

```css
#water {
  grid-area: 1 / 2 / 4 / 6;
  /* order : grid-row-start, grid-column-start, grid-row-end, grid-column-end.*/
}
```

### Level 17

```css
#water-2 {
  grid-area: 2 / 3 / 5 / 6;
}
```

### Level 18

```css
#poison {
  order: 1; /* default is 0 */
}
```

### Level 19

```css
#poison {
  order: -1; /* default is 0 */
}
```

### Level 20

```css
#garden {
  display: grid;
  grid-template-columns: 1fr 1fr; /* change */
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 21

```css
#garden {
  display: grid;
  grid-template-columns: repeat(8, 12.5%); /* change */
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 22

```css
#garden {
  display: grid;
  grid-template-columns: 100px 3em 40%; /* change */
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

### Level 23

```css
#garden {
  display: grid;
  grid-template-columns: 1fr 5fr; /* change */
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

### Level 24

```css
#garden {
  display: grid;
  grid-template-columns: 50px repeat(3, 1fr) 50px; /* change */
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}
```

### Level 25

```css
#garden {
  display: grid;
  grid-template-columns: 75px 3fr 2fr; /* change */
  grid-template-rows: 100%;
}
```

### Level 26

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: repeat(4, 12.5px) auto; /* change */
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}
```

### Level 27

```css
#garden {
  display: grid;
  grid-template: 60% 40% / 200px; /* change */
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

### Level 28

```css
#garden {
  display: grid;
  grid-template: auto 50px / 20% auto; /* change */
}
```
