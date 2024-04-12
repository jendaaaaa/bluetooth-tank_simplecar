bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
})
let Data = ""
OMG_Tank.Tank_Init(Tank_version.V3)
OMG_Tank.Stop_Motors()
bluetooth.startUartService()
basic.forever(function () {
    if (Data == "f") {
        OMG_Tank.Set_Speed(100, 100)
    } else if (Data == "b") {
        OMG_Tank.Set_Speed(-100, -100)
    } else if (Data == "l") {
        OMG_Tank.Set_Speed(-100, 100)
    } else if (Data == "r") {
        OMG_Tank.Set_Speed(100, -100)
    } else {
        OMG_Tank.Stop_Motors()
    }
})
