import { Keyboard } from "./keyboard";

export class DrawHistory {
    static display() {
        console.log(Keyboard.selectedBalls.blueBalls);
        console.log(Keyboard.selectedBalls.yellowBalls);
        console.log(Keyboard.selectedBalls.inputValue);
        console.log('display drawHistory')
    }
}