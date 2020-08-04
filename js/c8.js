// Reminder: C = F - 32 / 1.8

function CelToFah(cel) {
    var far = cel * 1.8 + 32;

    return far;
}

document.write(CelToFah(30));