/// <reference types="react-scripts" />

export type ButtonClickHandler = (event: ButtonClickEvent) => void
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>