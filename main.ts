function on_button_pressed_a() {
    servos.P0.setAngle(0)
    led.toggle(0, 0)
}

function on_button_pressed_b() {
    servos.P0.setAngle(90)
    led.toggle(4, 0)
}

function on_button_pressed_s() {
    servos.P0.setAngle(45)
    led.toggle(1, 0)
}

function on_button_pressed_u() {
    servos.P1.setAngle(0)
    led.toggle(2, 0)
}

function on_button_pressed_d() {
    servos.P1.setAngle(90)
    led.toggle(3, 0)
}

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "l") {
        on_button_pressed_a()
    } else if (data == "r") {
        on_button_pressed_b()
    } else if (data == "s") {
        on_button_pressed_s()
    } else if (data == "u") {
        on_button_pressed_u()
    } else if (data == "d") {
        on_button_pressed_d()
    }    
})
input.onButtonPressed(Button.A, on_button_pressed_a)
input.onButtonPressed(Button.B, on_button_pressed_b)
pins.servoSetPulse(AnalogPin.P0, 1500)
pins.servoSetPulse(AnalogPin.P1, 1500)
servos.P0.setAngle(45)
servos.P1.setAngle(45)
