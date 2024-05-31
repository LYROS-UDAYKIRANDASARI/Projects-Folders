const batteryLevel = document.getElementById('battery');

navigator.getBattery().then(function(battery) {
    const level = battery.level;
    const batteryStatus = level * 100;
    batteryLevel.innerHTML = batteryStatus
})