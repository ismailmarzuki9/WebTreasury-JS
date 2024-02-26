// var beli = getElementById("beli")
// beli = console.log("beli");


// const hide = document.getElementById("beli");
// myElement.style.color = "red";
// var hide =$("#beli")
// hide.on("click",function () {
//     // el.hide("slow");
//     alert('tesss')
// })
////////////////////
// databaseBarang array objek
// databaseBarang array objek
let databaseBarang = [
    { id: "123", nama: "Barang A", tanggalJatuhTempo: "2023-12-31", jumlah: 2 },
    { id: "456", nama: "Barang B", tanggalJatuhTempo: "2023-12-31", jumlah: 5 },
    { id: "789", nama: "Barang C", tanggalJatuhTempo: "2023-12-31", jumlah: 6 },
    { id: "101", nama: "Barang D", tanggalJatuhTempo: "2023-12-31", jumlah: 4 },
    { id: "121", nama: "Barang E", tanggalJatuhTempo: "2023-12-31", jumlah: 8 },
];
// let databaseUser =[
//     {id:'123', nama:"user", mybarang:[]},
// ]
let databaseUser =[
    
]
let mybarang=[];


// Event listener untuk tombol "Beli"
let JqBeli = $("a");
// document.getElementById("beli")
JqBeli.on("click", function() {
    // Mendapatkan ID barang dari atribut data-id
    let idBarang = this.getAttribute("data-id");
    
    // Cari barang berdasarkan ID di databaseBarangBarang
    let indexBarang = databaseBarang.findIndex(item => item.id === idBarang);
    

    if (indexBarang !== -1) {
        // Barang ditemukan
        let barang = databaseBarang[indexBarang];
        // console.log(barang.jumlah);

        if (barang.jumlah > 0) {
            // Barang tersedia, kurangi jumlah barang di databaseBarang
            databaseBarang[indexBarang].jumlah--;

            // Ambil atribut barang
            let { id, nama, tanggalJatuhTempo } = barang;

            // Tampilkan informasi pembelian
            console.log(`Anda telah membeli: ${nama}, ID: ${id}, Tanggal Jatuh Tempo: ${tanggalJatuhTempo}`);

            // Tampilkan sisa jumlah barang di databaseBarang
            console.log(`Sisa barang: ${barang.jumlah}`);

            // Menemukan objek user dalam array databaseUser
            // let user = databaseUser.find(user => user.id === '123');
            mybarang= barang // data barangmasuk ke array mybarang
            // user =databaseBarang[0];
            let tes = databaseUser.push(mybarang);
            // user.mybarang= tes
            

            console.log(`id barang anda: ${databaseUser.id}`);

        } else {
            console.log("Barang tidak tersedia.");
        }
    } else {
        console.log("Barang tidak ditemukan.");
    }
    
});


            ////////////Detai Keranjang onclik///////////////////////
            let ker =$(".keranjang")
            let Bker = $("#keranjang")
            
            Bker.click(function() {
            let dip = document.createElement("div")
            ker.addClass("detail")
            

            
            for (let i = 0; i < databaseUser.length; i++) {
                
                var nama = databaseUser.map(item =>item.nama)
                var id = databaseUser.map(f =>f.id)
                var tanggalJatuhTempo = databaseUser.map(f =>f.tanggalJatuhTempo)

                var ab =$(".detail").html(`nama : ${nama} ,id : ${id} , Tanggal Jatuhtempo : ${tanggalJatuhTempo}`
                )
                
            }
            ker.append(dip);
            dip.append(ab);
                console.log (ab)
            });
            /////////////////////////////////////

// /////////////Fitur mathrandom Grafik////////////////
// di halaman portovolio ada grafik yang nilainya di dasarkan pada math random untuk masing product
// setip product memiliki nilai grafikang berbeda
// yang di ambil hanya product yangdi pilih user
// buat tombol hasil untuk mejalankan mathrandom sehingga hasil di dapat

////////////////////////////