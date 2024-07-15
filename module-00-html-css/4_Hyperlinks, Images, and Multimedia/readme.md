# Hyperlinks, Images, and Multimedia

## 4.1. Creating Links

Links are created using the `<a>` tag, which stands for "anchor." The `href` attribute specifies the URL of the page the link goes to.

### Key Points:

- `<a>`: Defines a hyperlink.
- `href`: Specifies the URL of the link.

## 4.2. Target Attribute

The `target` attribute specifies where to open the linked document.

### Key Points:

- `_blank`: Opens the link in a new tab.
- `_self`: Opens the link in the same tab (default).

## 4.3. Email Links

Email links use the `mailto:` scheme in the `href` attribute to create a link that opens the user's email client.

### Key Points:

- `mailto:email@example.com`: Creates an email link.

## 4.4. Adding Images

Images are added using the `<img>` tag. The `src` attribute specifies the path to the image file.

### Key Points:

- `<img>`: Embeds an image in the document.
- `src`: Specifies the path to the image file.

## 4.5. Image Attributes

Several attributes can be used with the `<img>` tag to provide additional information.

### Key Points:

- `alt`: Provides alternative text for the image.
- `width` and `height`: Specifies the size of the image.

## 4.6. Image Links

Images can be used as links by wrapping the `<img>` tag inside an `<a>` tag.

### Key Points:

- `<a href="URL"><img src="image.jpg" alt="Description"></a>`: Makes an image a link.

## 4.7. Image Maps

Image maps allow you to define clickable areas within an image using the `<map>` and `<area>` tags.

### Key Points:

- `<map>`: Defines an image map.
- `<area>`: Defines a clickable area within an image map.

## 4.8. Picture Element

The `<picture>` element allows you to define multiple sources for an image, making it easier to provide responsive images.

### Key Points:

- `<picture>`: Contains multiple `<source>` elements and an `<img>` element.
- `<source>`: Specifies different images for different media conditions.

## 4.9. Audio

The `<audio>` element is used to embed sound content in documents.

### Key Points:

- `<audio>`: Embeds audio content.
- `controls`: Adds controls like play, pause, and volume.

## 4.10. Video

The `<video>` element is used to embed video content in documents.

### Key Points:

- `<video>`: Embeds video content.
- `controls`: Adds controls like play, pause, and volume.

## 4.11. Embedding Media

Media from external sources can be embedded using the `<embed>`, `<object>`, and `<iframe>` tags.

### Key Points:

- `<embed>`: Embeds external content (e.g., multimedia).
- `<object>`: Embeds external resources (e.g., multimedia, PDFs).
- `<iframe>`: Embeds another HTML document within the current document.
