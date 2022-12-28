// common code
radio.setGroup(1)
// receiver code
I2C_LCD1602.LcdInit(39)

input.onButtonPressed(Button.A,function(){
    radio.sendString("gt")
})

radio.onReceivedNumber(function(tmp){    
    I2C_LCD1602.ShowNumber(tmp, 1, 1)
})  

// sender code
/*radio.onReceivedString(function(receivedString){
    if(receivedString == "gt"){
        radio.sendNumber(input.temperature())
    }
})*/