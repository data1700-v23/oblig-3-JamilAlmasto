package data1700.oblignr3;


public class Gjest {
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;

    public Gjest(String film, int antall, String fornavn, String etternavn, String telefon, String epost) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
    }

    public Gjest() {
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getfornavn() {
        return fornavn;
    }

    public void setfornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getetternavn() {
        return etternavn;
    }

    public void setetternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String gettelefon() {
        return telefon;
    }

    public void settelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getepost() {
        return epost;
    }

    public void setepost(String epost) {
        this.epost = epost;
    }

}
