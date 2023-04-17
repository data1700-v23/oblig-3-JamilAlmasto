function hentData() {
    const bestiiling = {
        film: $("#velg1").val(),
        antall: $("#antall").val(),
        fornavn: $("#fnavn").val(),
        etternavn: $("#enavn").val(),
        telefon: $("#telefonnr").val(),
        epost: $("#epost").val()
    }

    $.post("/lagreAlleBilletter", bestiiling, function () {
        hentAlleGjster();
    });
    $("#velg1").val("Velg film her");
    $("#antall").val("");
    $("#antall").val("");
    $("#fnavn").val("");
    $("#enavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");

    function hentAlleGjster() {
        $.get("/hentAlleBilletter", function (data) {
            formaterData(data);
        });
    }

    function formaterData(bestiiling) {
        let ut = "<table class=\"table\"><thead><tr><th scope=\"col\">Film</th>  <th scope=\"col\">Antall</th><th scope=\"col\">Fornavn</th> " +
            "<th scope=\"col\">Etternavn</th><th scope=\"col\">Telefonnr</th><th scope=\"col\">Eposten</th> </tr></thead>";
        for (const kunde of bestiiling) {
            ut += "<tr><td scope=\"col\">" + kunde.film + "</td><td scope=\"col\">" + kunde.antall + "</td><td scope=\"col\">"
                + kunde.fornavn + "</td><td scope=\"col\">" + kunde.etternavn + "</td><td scope=\"col\">" + kunde.telefon +
                "</td><td scope=\"col\">" + kunde.epost + "</td><td> <button id='endreB'>Endre</button></td><td><button id='slettBr'>Slett</button></td></tr>";
        }
        ut += "</table>";
        $("#resulatat").html(ut);

    }

}

function slettAlle() {
    $.get("/slettAlleBilletter", function () {
        slettAlle();
    });
}










