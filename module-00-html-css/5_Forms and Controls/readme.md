# Forms and Controls

## 5.1. Form Elements

Forms are used to collect user input. A form is created using the `<form>` tag, which can contain various input elements like text fields, radio buttons, and submit buttons.

### Key Points:

- `<form>`: Defines a form.
- Contains various input elements.

## 5.2. Input Types

Input elements can have different types defined by the `type` attribute.

### Key Points:

- Common types: `text`, `password`, `radio`, `checkbox`, `submit`, `reset`, etc.

## 5.3. Text Input

Text input fields allow the user to enter text.

### Key Points:

- `<input type="text">`: Defines a single-line text input field.

## 5.4. Password Input

Password input fields mask the entered characters for privacy.

### Key Points:

- `<input type="password">`: Defines a password input field.

## 5.5. Radio Buttons

Radio buttons allow the user to select one option from a set.

### Key Points:

- `<input type="radio">`: Defines a radio button.
- Use the same `name` attribute for related options.

## 5.6. Checkboxes

Checkboxes allow the user to select multiple options.

### Key Points:

- `<input type="checkbox">`: Defines a checkbox.

## 5.7. Submit Button

The submit button sends the form data to a server.

### Key Points:

- `<input type="submit">`: Defines a submit button.

## 5.8. Reset Button

The reset button resets all form fields to their default values.

### Key Points:

- `<input type="reset">`: Defines a reset button.

## 5.9. Form Attributes

Forms have several attributes that define their behavior.

### Key Points:

- `action`: Specifies the URL where the form data is sent.
- `method`: Specifies the HTTP method (`GET` or `POST`) used to send the form data.

## 5.10. Form Validation

Form validation ensures that the user provides the required data in the correct format.

### Key Points:

- `required`: Specifies that an input field must be filled out.
- `pattern`: Specifies a regular expression that the input field's value must match.

## 5.11. Input Attributes

Input elements can have several attributes that define their behavior and appearance.

### Key Points:

- `placeholder`: Provides a hint to the user of what can be entered in the field.
- `value`: Sets the initial value of the input field.
- `readonly`: Specifies that an input field is read-only.

## 5.12. Input Types (Color, Date, Datetime-local, Email, Month, Number, Range, Search, Tel, Time, URL, Week)

HTML5 introduces several new input types that enhance form functionality.

### Key Points:

- `color`: Allows the user to select a color.
- `date`: Allows the user to select a date.
- `datetime-local`: Allows the user to select a date and time.
- `email`: Ensures the user provides a valid email address.
- `month`: Allows the user to select a month.
- `number`: Allows the user to enter a numeric value.
- `range`: Allows the user to select a value from a range.
- `search`: Provides a search field.
- `tel`: Ensures the user provides a valid telephone number.
- `time`: Allows the user to select a time.
- `url`: Ensures the user provides a valid URL.
- `week`: Allows the user to select a week.

## 5.13. Input Restrictions

Input restrictions ensure that the user enters data within specified limits.

### Key Points:

- `min` and `max`: Specify the minimum and maximum values.
- `maxlength`: Specifies the maximum number of characters allowed.
- `step`: Specifies the interval between valid values.
