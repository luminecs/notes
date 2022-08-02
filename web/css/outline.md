# CSS 提纲

<details>
<summary>CSS 是什么？</summary>

CSS (Cascading Style Sheet) 负责网页的样式。所谓的层叠，指的是网页内层的样式默认继承外层的样式。
</details>

<details>
<summary>CSS Syntax？</summary>

示例：将 `<h1>` 字体大小设置为 `12px`
<pre>
selector     declaration
  h1      {font-size: 12px; color: blue;}
           property   value
</pre>
</details>

<details>
<summary>CSS Selectors 是什么？</summary>

选择器，指的是选择某个 HTML 标签，进而对其设置样式。
</details>

<details>
<summary>CSS Selectors 有哪些分类？</summary>

- Simple selectors (select elements based on element name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)
</details>

<details>
<summary>Element Name Selector</summary>

```html
<p>段落</p>
```
```css
p {
  text-align: center;
  color: red;
}
```
</details>

<details>
<summary>Element id Selector</summary>
每个 HTML 元素的 id 是唯一的，所以通过 id 选择器设置的样式仅对此元素有效。

```html
<p id="para1">段落</p>
```
```css
#para1 {
  text-align: center;
  color: red;
}
```
> id 不能以数字开头
</details>

<details>
<summary>Element class Selector</summary>
一个 class 可以为多个 HTML 元素设置样式，故可通过 class 为多个元素设置相同样式。

```html
<p class="center">段落1</p>
<span class="center">段落2</span>
```
```css
.center {
  text-align: center;
  color: red;
}
```

可以通过 class 只对某个 HTML 元素的设置样式。
```css
p.center {
  text-align: center;
  color: red;
}
```
</details>



