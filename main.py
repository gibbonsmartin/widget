angle1 = 0

def on_button_pressed_a():
  global angle1 
  angle1 += 1
  servos.P0.set_angle(0)
  led.toggle(0, 0)
  
def on_button_pressed_b():
  global angle1
  angle1 -= 1
  servos.P0.set_angle(90)
  led.toggle(4, 0)

def on_button_pressed_s():
  global angle1
  angle1 = 0
  servos.P0.set_angle(45)
  led.toggle(2,0)

def on_uart_data_received():
  data = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
  if data == 'l' :
    on_button_pressed_a()
  elif data == 'r' :
    on_button_pressed_b()
  elif data == 's' :
    on_button_pressed_s()

bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE), on_uart_data_received)
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
pins.servo_set_pulse(AnalogPin.P0, 1500)
servos.P0.set_angle(45);