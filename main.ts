let angle1 = 0
function on_button_pressed_a() {
    
    angle1 += 1
    servos.P0.setAngle(0)
    led.toggle(0, 0)
}

function on_button_pressed_b() {
    
    angle1 -= 1
    servos.P0.setAngle(90)
    led.toggle(4, 0)
}

function on_button_pressed_s() {
    
    angle1 = 0
    servos.P0.setAngle(45)
    led.toggle(2, 0)
}

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "l") {
        on_button_pressed_a()
    } else if (data == "r") {
        on_button_pressed_b()
    } else if (data == "s") {
        on_button_pressed_s()
    }
    
})
input.onButtonPressed(Button.A, on_button_pressed_a)
input.onButtonPressed(Button.B, on_button_pressed_b)
pins.servoSetPulse(AnalogPin.P0, 1500)
servos.P0.setAngle(45)
