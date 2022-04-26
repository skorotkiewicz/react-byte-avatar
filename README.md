# react-byte-avatar

> Simple React component to display a uniq avatar from user name.

Inspired from this HN post: https://news.ycombinator.com/item?id=30668137

## Install

```
yarn add react-byte-avatar
// or
npm i react-byte-avatar
```

## Props

| prop   |  default   |   type |
| ------ | :--------: | -----: |
| nick   | _required_ | string |
| width  |     18     | number |
| height |     14     | number |

## Demo

![demo screenshot](demo.png)

## Example

```jsx
import { Avatar } from "react-byte-avatar";

const App = () => {
  return (
    <div>
      <Avatar name="React" />
    </div>
  );
};
```
