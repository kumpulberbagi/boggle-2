//Kata Apapun Yang Tidak Ada Dalam Gird Bisa di Cari
function boggle2(cari) {
    var gird = [];
    var tampungGrid = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    possible = possible.split("")
    for (var i = 0; i < 4; i++) {
        var arr = [];
        for (var j = 0; j < 4; j++) {
            var acak = Math.floor(Math.random() * possible.length)
            arr.push(possible[acak])
            tampungGrid.push(possible[acak])
            possible.slice(j, 1)
        }
        gird.push(arr)
    }
    console.log(gird);
    cari = cari.split("")
    var status = true;
    for (var i = 0; i < cari.length; i++) {
        if (tampungGrid.indexOf(cari[i]) == -1) {
            status = false;
            break;
        } else {
            status = true;
        }
    }

    if (status == true) {
        return "Data yang dicari ADA di gird"
    } else {
        return "Data yang dicari TIDAK ada di gird"
    }

}

console.log(boggle2("AK"));
