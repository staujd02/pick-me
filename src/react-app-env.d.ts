/// <reference types="react-scripts" />

type ButtonClickHandler = (event: ButtonClickEvent) => void
type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>