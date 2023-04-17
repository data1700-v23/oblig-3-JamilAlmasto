package data1700.oblignr3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GjestRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreGjester(Gjest innGjest) {
        String sql = "INSERT INTO Gjest(film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innGjest.getFilm(), innGjest.getAntall(), innGjest.getfornavn(), innGjest.getetternavn(), innGjest.gettelefon(), innGjest.getepost());
    }

    public List<Gjest> hentAlle() {
        String sql = "SELECT * FROM Gjest order by etternavn ASC ";
        List<Gjest> gjester = db.query(sql, new BeanPropertyRowMapper(Gjest.class));

        return gjester;
    }

    public void slettAlle() {
        String sql = "DELETE FROM Gjest";
        db.update(sql);
    }

}

