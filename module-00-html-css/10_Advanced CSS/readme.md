# CSS Advanced Techniques

In this Topic we will discuss advanced CSS techniques.

## Table of Contents

10.1. [CSS Transitions](#101-css-transitions)
10.2. [CSS Animations](#102-css-animations)
10.3. [CSS Shadows](#103-css-shadows)
10.4. [CSS Gradients](#104-css-gradients)

### 10.1. CSS Transitions

CSS transitions allow you to change property values smoothly over a specified duration. They provide a way to control animation speed when changing CSS properties.

Key concepts:

- Transition property
- Transition duration
- Transition timing function
- Transition delay

[View example](./10.1_css_transitions.html)

The transitions are defined using the `transition` property, which combines duration, timing function, and the properties to be animated.

Key points in this example:

- The `transition` property is set on the initial state of the elements.
- Multiple properties can be transitioned simultaneously.
- The `ease` timing function is used for smooth acceleration and deceleration.
- Transitions are triggered by the `:hover` pseudo-class.

### 10.2. CSS Animations

CSS animations allow you to create complex, keyframe-based animations without using JavaScript. They offer more control over the animation sequence than transitions.

Key concepts:

- @keyframes rule
- Animation properties (name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state)

[View example](./10.2_css_animations.html)

### 10.3. CSS Shadows

CSS shadows add depth and emphasis to elements. There are two types of shadows: box shadows for block-level elements and text shadows for text.

Key concepts:

- Box-shadow property
- Text-shadow property
- Multiple shadows

[View example](./10.3_css_shadows.html)

### 10.4. CSS Gradients

CSS gradients let you display smooth transitions between two or more specified colors. They can be used to create background effects without using images.

Key concepts:

- Linear gradients
- Radial gradients
- Repeating gradients
- Multiple color stops

[View example](./10.4_css_gradients.html)
