# React Handy Tools

This npm package provides a set of reusable React components and a custom hook for convenient development of React applications.

## Installation

To install this package, use the following npm command:

```bash
npm install react-handy-tools
```

## Components

### Button

A customizable button component for React applications.

#### Props

-   `label` (string): Button text.
-   `width` (number): Button width.
-   `height` (number): Button height.
-   `fontSize` (number): Font size of the button text.
-   `fontColor` (string, optional): Color of the button text. Defaults to white.
-   `backgroundColor` (string, optional): Background color of the button. Defaults to black.
-   `borderRadius` (number): Border radius of the button.

#### Example

```tsx
<Button
  label="Click me"
  width={150}
  height={50}
  fontSize={16}
  fontColor="black"
  backgroundColor="yellow"
  borderRadius={5}
/>
```

### FlexBox

A flexible container component with support for various flexbox properties.

#### Props

-   `children` (ReactNode): Child elements.
-   `flexDirection` (string): Flex container direction.
-   `alignItems` (string): Align items within the container.
-   `justifyContent` (string): Justify content within the container.
-   `flexWrap` (string, optional): Flex container wrap property. Defaults to 'nowrap'.
-   `gap` (number | 'normal', optional): Gap between flex container children. Defaults to 0.
-   `rowGap` (number | 'normal', optional): Row gap between flex container children. Defaults to 0.
-   `columnGap` (number | 'normal', optional): Column gap between flex container children. Defaults to 0.

#### Example

```tsx
<FlexBox
  flexDirection="row"
  alignItems="center"
  justifyContent="space-between"
  gap={10}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</FlexBox>
```

## Custom Hook

### useFetch

A custom hook for making HTTP requests using axios.

#### Props

-   `apiHost` (string): The base URL of the API.
-   `endpoint` (string): The API endpoint.
-   `param` (string or number, optional): Additional parameter for the API endpoint

#### Example

```tsx
const { data, isLoading, isError, refetch } = useFetch({
  apiHost: 'https://api.example.com',
  endpoint: 'data',
  param: 'exampleParam'
});
```
