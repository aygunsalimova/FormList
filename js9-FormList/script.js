class sirket {
    constructor(sirketAdi, filialAdi) {
        this.sirket = sirketAdi,
            this.filial = filialAdi
    }

    isciler = [
        [],
        [],
        []
    ]


    gonder() {
        let data = this.isciler;
        let ad = document.getElementById("ad").value;
        let vezife = document.getElementById("vezife").value;
        let maas = document.getElementById("maas").value;

        console.log(typeof(ad)); //string??

        if (ad !== null && vezife !== null && maas !== null) {
            data[0].push(ad);
            data[1].push(vezife);
            data[2].push(maas);
        } else {
            alert("You didn't enter your information!");
            //////////////////
        }


    }


    table() {
        let data = this.isciler;

        let tbl = document.getElementById("tbl");
        let show = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Vezife</th>
          <th scope="col">Maas</th>
        </tr>
      </thead>`;

        for (let i = 0; i < data[0].length; i++) {

            show += `<tr>
            <th scope="row">${i+1}</th>
            <td> ${data[0][i]} </td>
            <td>${data[1][i]}</td>
            <td>${data[2][i]}</td>
          </tr>`
        }
        tbl.innerHTML = show;
    }


}



const a = new sirket("Yup Technology", 'Nizami');
const b = new sirket("Yup Technology", 'Elmler');
const c = new sirket("Yup Technology", 'Yasamal');

document.getElementById("sirket").innerHTML = a.sirket;
// const fil = document.getElementById("filial");

let arr = [];

arr.push(a.filial, b.filial, c.filial);

/* let arr = [
    "Nizami",
    "Elmler",
    "Yasamal"
] */

filial.onchange = function() {
    let filAd = `${arr[i]}`; //i ni nece assign etmek?
    filial.innerHTML = filAd;
}



function send() {
    a.gonder();
    a.table();

}


//

let list = `<option selected disabled>Choose place</option>
<option value="0">${arr[0]}</option>
<option value="1">${arr[1]}</option>
<option value="2">${arr[2]}</option>`;

onload = function() {
    let slc = document.getElementById("slc");

    slc.innerHTML = list;

}