# Flexbox Froggy

[Link to the site](https://flexboxfroggy.com/)

## Level 1

`justify-content` for main axix

```css
#pond {
  display: flex;
  justify-content: flex-end; /* change */
}
```

## Level 2

```css
#pond {
  display: flex;
  justify-content: center; /* change */
}
```

## Level 3

```css
#pond {
  display: flex;
  justify-content: space-around; /* change */
}
```

## Level 4

`align-items` for cross axis

```css
#pond {
  display: flex;
  justify-content: space-around; /* change */
}
```

## Level 5

```css
#pond {
  display: flex;
  justify-content: center; /* change */
  align-items: center; /* change */
}
```

## Level 6

```css
#pond {
  display: flex;

  /* changes */
  justify-content: space-around;
  align-items: flex-end;
}
```

## Level 7

```css
#pond {
  display: flex;
  flex-direction: row-reverse; /* change */
}
```

## Level 8

```css
#pond {
  display: flex;
  flex-direction: column; /* change */
}
```

## Level 9

```css
#pond {
  display: flex;

  /* changes */
  flex-direction: row-reverse;
  justify-content: flex-end; /* ! the direction is changed */
}
```

## Level 10

```css
#pond {
  display: flex;

  /* changes */
  flex-direction: column;
  justify-content: flex-end;
}
```

## Level 11

```css
#pond {
  display: flex;

  /* changes */
  flex-direction: column;
  justify-content: flex-end;
}
```

## Level 12

```css
#pond {
  display: flex;

  /* changes */
  flex-direction: column-reverse;
  justify-content: space-between;
}
```

## Level 13

```css
#pond {
  display: flex;

  /* changes */
  align-items: flex-end;
  flex-direction: row-reverse;
  justify-content: center;
}
```

## Level 14

```css
#pond {
  display: flex;
}

.yellow {
  order: 1; /* change */
}
```

## Level 15

```css
#pond {
  display: flex;
}

.red {
  order: -1; /* change */
}
```

## Level 16

```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
  align-self: flex-end; /* change */
}
```

## Level 17

```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
  /* changes */
  order: 1;
  align-self: flex-end;
}
```

## Level 18

```css
#pond {
  display: flex;
  flex-wrap: wrap; /* changes */
}
```

## Level 19

```css
#pond {
  display: flex;

  /* changes */
  flex-wrap: wrap;
  flex-direction: column;
}
```

## Level 20

```css
#pond {
  display: flex;
  flex-flow: column wrap; /* flex-direction + flex-wrap */
}
```

## Level 21

```css
#pond {
  display: flex;
  flex-wrap: wrap;

  align-content: flex-start; /* changes */
  /* align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. 
  When there is only one line, align-content has no effect. */
}
```

## Level 22

```css
#pond {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end; /* changes*/
}
```

## Level 23

```css
#pond {
  display: flex;
  flex-wrap: wrap;

  /* changes*/
  flex-direction: column-reverse;
  align-content: center;
}
```

## Level 24

```css
#pond {
  display: flex;

  /* changes*/
  flex-flow: column-reverse wrap-reverse; /* wrap-reverse smh! */
  justify-content: center;
  align-content: space-between;
}
```
