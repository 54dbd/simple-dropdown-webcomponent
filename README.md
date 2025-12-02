# SimpleDropdown Web Component

A lightweight, animated, and themeable dropdown **Web Component**.  
Supports click / hover modes, fade & slide animation, and light/dark themes.  

---

## 🌟 Features

- **Click or Hover**: Choose `mode="click"` (default) or `mode="hover"`.
- **Animated**: Fade + Slide open/close.
- **Floating Menu**: Menu is positioned absolutely and does not affect layout.
- **Themeable**: Supports `theme="dark"` and CSS variables for customization.
- **Multiple Instances**: Easily reuse multiple dropdowns on a page.
- **Slot Content**: Use HTML `<li>` elements inside `<simple-dropdown>`.

---

## 📦 Installation

```bash
npm install simple-dropdown-webcomponent
```
# ⚡ Usage
## HTML
```html
<script type="module" src="node_modules/simple-dropdown-webcomponent/src/SimpleDropdown.js"></script>

<simple-dropdown label="Menu">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</simple-dropdown>

<simple-dropdown label="Hover Menu" mode="hover" theme="dark">
  <li>A</li>
  <li>B</li>
</simple-dropdown>
```
## CSS Customization (Optional)
```css
simple-dropdown {
  --dropdown-bg: #ffcccc;
  --dropdown-hover-bg: #ff9999;
  --dropdown-color: #000;
}
```

# ✅ Attributes
| Attribute | Default | Description                          |
| --------- | ------- | ------------------------------------ |
| `label`   | "Menu"  | Text shown on the toggle button      |
| `mode`    | "click" | Dropdown trigger: `click` or `hover` |
| `theme`   | "light" | "light" or "dark" theme              |

# 📌 Notes

- The menu is positioned absolutely and floats above other content.

- Clicking outside the dropdown will close it automatically (for click mode).

- Works in modern browsers supporting Web Components (Chrome, Firefox, Edge, Safari).

# 💻 Development / Demo

You can run the demo locally:
```bash
npm install
open demo/index.html
```
# 📝 License

MIT License