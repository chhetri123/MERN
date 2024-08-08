# DOM Methods Examples

## Document Methods

### `document.getElementById()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getElementById Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      console.log(element.textContent); // Outputs: Hello, World!
    </script>
  </body>
</html>
```

### `document.getElementsByClassName()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getElementsByClassName Example</title>
  </head>
  <body>
    <p class="example">Hello, World!</p>
    <p class="example">Hello, Universe!</p>
    <script>
      const elements = document.getElementsByClassName("example");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `document.getElementsByTagName()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getElementsByTagName Example</title>
  </head>
  <body>
    <p>Hello, World!</p>
    <p>Hello, Universe!</p>
    <script>
      const elements = document.getElementsByTagName("p");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `document.querySelector()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>querySelector Example</title>
  </head>
  <body>
    <p class="example">Hello, World!</p>
    <p class="example">Hello, Universe!</p>
    <script>
      const element = document.querySelector(".example");
      console.log(element.textContent); // Outputs: Hello, World!
    </script>
  </body>
</html>
```

### `document.querySelectorAll()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>querySelectorAll Example</title>
  </head>
  <body>
    <p class="example">Hello, World!</p>
    <p class="example">Hello, Universe!</p>
    <script>
      const elements = document.querySelectorAll(".example");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `document.createElement()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>createElement Example</title>
  </head>
  <body>
    <script>
      const newElement = document.createElement("p");
      newElement.textContent = "Hello, World!";
      document.body.appendChild(newElement);
    </script>
  </body>
</html>
```

### `document.createTextNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>createTextNode Example</title>
  </head>
  <body>
    <script>
      const textNode = document.createTextNode("Hello, World!");
      document.body.appendChild(textNode);
    </script>
  </body>
</html>
```

### `document.createAttribute()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>createAttribute Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      const newAttr = document.createAttribute("title");
      newAttr.value = "Greeting";
      element.setAttributeNode(newAttr);
      console.log(element.getAttribute("title")); // Outputs: Greeting
    </script>
  </body>
</html>
```

### `document.createDocumentFragment()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>createDocumentFragment Example</title>
  </head>
  <body>
    <script>
      const fragment = document.createDocumentFragment();
      const p1 = document.createElement("p");
      p1.textContent = "Hello, World!";
      const p2 = document.createElement("p");
      p2.textContent = "Hello, Universe!";
      fragment.appendChild(p1);
      fragment.appendChild(p2);
      document.body.appendChild(fragment);
    </script>
  </body>
</html>
```

## Element Methods

### `element.getAttribute()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getAttribute Example</title>
  </head>
  <body>
    <p id="example" title="Greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      console.log(element.getAttribute("title")); // Outputs: Greeting
    </script>
  </body>
</html>
```

### `element.setAttribute()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setAttribute Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      element.setAttribute("title", "Greeting");
      console.log(element.getAttribute("title")); // Outputs: Greeting
    </script>
  </body>
</html>
```

### `element.removeAttribute()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>removeAttribute Example</title>
  </head>
  <body>
    <p id="example" title="Greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      element.removeAttribute("title");
      console.log(element.getAttribute("title")); // Outputs: null
    </script>
  </body>
</html>
```

### `element.hasAttribute()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hasAttribute Example</title>
  </head>
  <body>
    <p id="example" title="Greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      console.log(element.hasAttribute("title")); // Outputs: true
    </script>
  </body>
</html>
```

### `element.getAttributeNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getAttributeNode Example</title>
  </head>
  <body>
    <p id="example" title="Greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      const attrNode = element.getAttributeNode("title");
      console.log(attrNode.value); // Outputs: Greeting
    </script>
  </body>
</html>
```

### `element.setAttributeNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setAttributeNode Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      const newAttr = document.createAttribute("title");
      newAttr.value = "Greeting";
      element.setAttributeNode(newAttr);

      console.log(element.getAttribute("title")); // Outputs: Greeting
    </script>
  </body>
</html>
```

### `element.removeAttributeNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>removeAttributeNode Example</title>
  </head>
  <body>
    <p id="example" title="Greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      const attrNode = element.getAttributeNode("title");
      element.removeAttributeNode(attrNode);
      console.log(element.getAttribute("title")); // Outputs: null
    </script>
  </body>
</html>
```

### `element.getElementsByClassName()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.getElementsByClassName Example</title>
  </head>
  <body>
    <div id="container">
      <p class="example">Hello, World!</p>
      <p class="example">Hello, Universe!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const elements = container.getElementsByClassName("example");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `element.getElementsByTagName()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.getElementsByTagName Example</title>
  </head>
  <body>
    <div id="container">
      <p>Hello, World!</p>
      <p>Hello, Universe!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const elements = container.getElementsByTagName("p");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `element.querySelector()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.querySelector Example</title>
  </head>
  <body>
    <div id="container">
      <p class="example">Hello, World!</p>
      <p class="example">Hello, Universe!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const element = container.querySelector(".example");
      console.log(element.textContent); // Outputs: Hello, World!
    </script>
  </body>
</html>
```

### `element.querySelectorAll()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.querySelectorAll Example</title>
  </head>
  <body>
    <div id="container">
      <p class="example">Hello, World!</p>
      <p class="example">Hello, Universe!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const elements = container.querySelectorAll(".example");
      console.log(elements[0].textContent); // Outputs: Hello, World!
      console.log(elements[1].textContent); // Outputs: Hello, Universe!
    </script>
  </body>
</html>
```

### `element.matches()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.matches Example</title>
  </head>
  <body>
    <p id="example" class="greeting">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      console.log(element.matches(".greeting")); // Outputs: true
    </script>
  </body>
</html>
```

### `element.closest()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>element.closest Example</title>
  </head>
  <body>
    <div class="container">
      <div class="sub-container">
        <p id="example">Hello, World!</p>
      </div>
    </div>
    <script>
      const element = document.getElementById("example");
      const closestContainer = element.closest(".container");
      console.log(closestContainer.className); // Outputs: container
    </script>
  </body>
</html>
```

### `element.insertAdjacentHTML()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>insertAdjacentHTML Example</title>
  </head>
  <body>
    <div id="container">Hello, World!</div>
    <script>
      const container = document.getElementById("container");
      container.insertAdjacentHTML("beforeend", "<p>Hello, Universe!</p>");
      console.log(container.innerHTML); // Outputs: Hello, World!<p>Hello, Universe!</p>
    </script>
  </body>
</html>
```

### `element.insertAdjacentText()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>insertAdjacentText Example</title>
  </head>
  <body>
    <div id="container">Hello, World!</div>
    <script>
      const container = document.getElementById("container");
      container.insertAdjacentText("beforeend", " Hello, Universe!");
      console.log(container.textContent); // Outputs: Hello, World! Hello, Universe!
    </script>
  </body>
</html>
```

### `element.insertAdjacentElement()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>insertAdjacentElement Example</title>
  </head>
  <body>
    <div id="container">Hello, World!</div>
    <script>
      const container = document.getElementById("container");
      const newElement = document.createElement("p");
      newElement.textContent = "Hello, Universe!";
      container.insertAdjacentElement("beforeend", newElement);
      console.log(container.innerHTML); // Outputs: Hello, World!<p>Hello, Universe!</p>
    </script>
  </body>
</html>
```

## Node Methods

### `node.appendChild()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>appendChild Example</title>
  </head>
  <body>
    <div id="container">Hello, World!</div>
    <script>
      const container = document.getElementById("container");
      const newElement = document.createElement("p");
      newElement.textContent = "Hello, Universe!";
      container.appendChild(newElement);
      console.log(container.innerHTML); // Outputs: Hello, World!<p>Hello, Universe!</p>
    </script>
  </body>
</html>
```

### `node.removeChild()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>removeChild Example</title>
  </head>
  <body>
    <div id="container">
      <p>Hello, World!</p>
      <p id="example">Hello, Universe!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const element = document.getElementById("example");
      container.removeChild(element);
      console.log(container.innerHTML); // Outputs: <p>Hello, World!</p>
    </script>
  </body>
</html>
```

### `node.replaceChild()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>replaceChild Example</title>
  </head>
  <body>
    <div id="container">
      <p id="example">Hello, World!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const newElement = document.createElement("p");
      newElement.textContent = "Hello, Universe!";
      const oldElement = document.getElementById("example");
      container.replaceChild(newElement, oldElement);
      console.log(container.innerHTML); // Outputs: <p>Hello, Universe!</p>
    </script>
  </body>
</html>
```

### `node.cloneNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>cloneNode Example</title>
  </head>
  <body>
    <div id="container">
      <p id="example">Hello, World!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const element = document.getElementById("example");
      const clone = element.cloneNode(true);
      container.appendChild(clone);
      console.log(container.innerHTML); // Outputs: <p id="example">Hello, World!</p><p id="example">Hello, World!</p>
    </script>
  </body>
</html>
```

### `node.contains()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>contains Example</title>
  </head>
  <body>
    <div id="container">
      <p id="example">Hello, World!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const element = document.getElementById("example");
      console.log(container.contains(element)); // Outputs: true
    </script>
  </body>
</html>
```

### `node.hasChildNodes()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hasChildNodes Example</title>
  </head>
  <body>
    <div id="container">
      <p>Hello, World!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      console.log(container.hasChildNodes()); // Outputs: true
    </script>
  </body>
</html>
```

### `node.insertBefore()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>insertBefore Example</title>
  </head>
  <body>
    <div id="container">
      <p id="example">Hello, World!</p>
    </div>
    <script>
      const container = document.getElementById("container");
      const newElement = document.createElement("p");
      newElement.textContent = "Hello, Universe!";
      const referenceElement = document.getElementById("example");
      container.insertBefore(newElement, referenceElement);
      console.log(container.innerHTML); // Outputs: <p>Hello, Universe!</p><p id="example">Hello, World!</p>
    </script>
  </body>
</html>
```

### `node.isEqualNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>isEqualNode Example</title>
  </head>
  <body>
    <div id="container">
      <p id="example1">Hello, World!</p>
      <p id="example2">Hello, World!</p>
    </div>
    <script>
      const element1 = document.getElementById("example1");
      const element2 = document.getElementById("example2");
      console.log(element1.isEqualNode(element2)); // Outputs: true
    </script>
  </body>
</html>
```

### `node.isSameNode()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>isSameNode Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element1 = document.getElementById("example");
      const element2 = document.getElementById("example");
      console.log(element1.isSameNode(element2)); // Outputs: true
    </script>
  </body>
</html>
```

## Event Methods

### `element.addEventListener()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>addEventListener Example</title>
  </head>
  <body>
    <button id="example">Click me</button>
    <script>
      const button = document.getElementById("example");
      button.addEventListener("click", () => {
        alert("Button clicked!");
      });
    </script>
  </body>
</html>
```

### `element.removeEventListener()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>removeEventListener Example</title>
  </head>
  <body>
    <button id="example">Click me</button>
    <script>
      const button = document.getElementById("example");
      const handleClick = () => {
        alert("Button clicked!");
      };
      button.addEventListener("click", handleClick);
      button.removeEventListener("click", handleClick);
    </script>
  </body>
</html>
```

### `element.dispatchEvent()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>dispatchEvent Example</title>
  </head>
  <body>
    <button id="example">Click me</button>
    <script>
      const button = document.getElementById("example");
      const event = new Event("click");
      button.dispatchEvent(event);
      button.addEventListener("click", () => {
        alert("Button clicked!");
      });
    </script>
  </body>
</html>
```

## Style Methods

### `element.style.getPropertyValue()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getPropertyValue Example</title>
  </head>
  <body>
    <p id="example" style="color: red;">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      console.log(element.style.getPropertyValue("color")); // Outputs: red
    </script>
  </body>
</html>
```

### `element.style.setProperty()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>setProperty Example</title>
  </head>
  <body>
    <p id="example">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      element.style.setProperty("color", "blue");
      console.log(element.style.color); // Outputs: blue
    </script>
  </body>
</html>
```

### `element.style.removeProperty()`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>removeProperty Example</title>
  </head>
  <body>
    <p id="example" style="color: red;">Hello, World!</p>
    <script>
      const element = document.getElementById("example");
      element.style.removeProperty("color");
      console.log(element.style.color); // Outputs: empty string
    </script>
  </body>
</html>
```
