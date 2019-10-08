/// <reference types="react-scripts" />

interface StreamProps{
    source: Source
}

type ConfigureButtonProps = {
    buttonClickHandler: ButtonClickHandler 
}
type ButtonClickHandler = (event: ButtonClickEvent) => void
type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface Source {
    source: string
    title: string
}

interface CyclerProps {
    sourceList: Array<Source>
    cycleTime: number
}

interface CyclerState {
    activeSource: number
    millisecondsRemaining: number
    controlsVisible: boolean
    playbackPaused: boolean
}

interface CyclerControlProps {
    playBackMode: PlayBackMode
    onSkip?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
    onPlayBack?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}

interface CyclerControlState {
}

type KaleidoscopeProps = {
    loadTime: number
}

type KaleidoscopeState = {
}

interface CurtainProps {
    open: boolean
}

interface CurtainState {
}

interface LoaderProps {
    loadTime: number
    handleConfigureClick: ButtonClickHandler
}

interface LoaderState {
    doneLoading: boolean
}

interface TimeDisplayProps{
    time: number
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}