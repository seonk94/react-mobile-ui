# Virtual Scroll

### 사용 예시

```js
<ScrollComponent
  Item={(item: ItemType) => <li key={item.id}>{item.text}</li>}
  options={dummy}
  height={500}
  childHeight={21}
/>
```