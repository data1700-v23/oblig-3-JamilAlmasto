
function validerAntall(antall) {
    const regExp = /^([1-9]|[1-9][0-9]|1[0-9]{2}|200)$/;
    const ok = regExp.test(antall);

    if (!ok) {
        $("#span1").html("Du må skrive et tall større enn 0 og mindre enn 200!");
        $("#span1").css("color", "red")
        $("#antall").css("border-bottom", "2px solid red");


        return false;
    } else {
        $("#span1").html("");
        $("#antall").css("border-bottom", "2px solid lightgreen");
        return true;
    }

}

function valdereFnavn(fornavn) {
    const regExp = /^[a-zA-ZæøåÆØÅ.\-|_]{2,20}$/;
    const ok = regExp.test(fornavn);


    if (!ok) {
        $("#span2").html("Du må skrive et gyldig fornavn!");
        $("#span2").css("color", "red")
        $("#fnavn").css("border", "1px solid red");
        return false;
    } else if ($("#fnavn").val() ===$("#enavn").val()) {
        $("#span2,#span3").html("Fornavn og etternavn kan ikke være like!");
        $("#span2,#span3").css("color", "red")
        $("#fnavn").css("border", "1px solid red");
        return false;


    } else {
        $("#span2").html("");
        $("#span3").html("");
        $("#fnavn").css("border", "1px solid lightgreen");
        return true;
    }

}

function valdereEnavn(etterNavn) {
    const regExp = /^[a-zA-ZæøåÆØÅ .\-|_]{2,20}$/;
    const ok = regExp.test(etterNavn);


    if (!ok) {
        $("#span3").html("Du må skrive et gyldig etternavn!");
        $("#span3").css("color", "red");
        $("#enavn").css("border", "1px solid red");
        return false;
    } else if ($("#fnavn").val() === $("#enavn").val()) {
        $("#span2,#span3").html("Fornavn og etternavn kan ikke være like!");
        $("#span2,#span3").css("color", "red")
        $("#enavn").css("border", "1px solid red");
        return false;
    } else {
        $("#span3").html("");
        $("#span2").html("");
        $("#enavn").css("border", "1px solid lightgreen");
        return true;
    }

}

function valdereTelefonnr(telefonnr) {
    const regExp = /^[0-9]{8}$/;
    const ok = regExp.test(telefonnr);

    if (!ok) {
        $("#span4").html("Du må skrive et gyldig telefonnr!");
        $("#span4").css("color", "red");
        $("#telefonnr").css("border", "1px solid red");
        return false;
    } else {
        $("#span4").html("");
        $("#telefonnr").css("border", "1px solid lightgreen");
        return true;

    }

}

function valdereEpost(epost) {
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const ok = regExp.test(epost);

    if (!ok) {
        $("#span5").html("Du må skrive en gyldig epost!");
        $("#span5").css("color", "red");
        $("#epost").css("border", "1px solid red");
        return false;
    } else {

        $("#span5").html("");
        $("#epost").css("border", "1px solid lightgreen");
        return true;
    }

}


function LagreOgHenteAlle() {
    const okAntall = validerAntall($("#antall").val());
    const okFnavn = valdereFnavn($("#fnavn").val());
    const okEnavn = valdereEnavn($("#enavn").val());
    const okTelefonnr = valdereTelefonnr($("#telefonnr").val());
    const okEpost = valdereEpost($("#epost").val());
    if (okAntall && okFnavn && okEnavn && okTelefonnr && okEpost) {
        hentData();

    } else if (!okAntall) {
        $("#antall").focus();
    } else if (!okFnavn) {
        $("#fnavn").focus();
    } else if (!okEnavn) {
        $("#enavn").focus();

    } else if (!okTelefonnr) {
        $("#telefonnr").focus();
    } else if (!okEpost) {
        $("#epost").focus();

    }
}


