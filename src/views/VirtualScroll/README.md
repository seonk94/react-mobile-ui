# Virtual Scroll

- 현지 보이는 item 만 렌더링 하는 virtual scroll 구현

### 사용 예시

```js
<ScrollComponent
  Item={(item: ItemType) => <li key={item.id}>{item.text}</li>}
  options={dummy}
  height={500}
  childHeight={21}
/>
```