package data1700.oblignr3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GjestController {
    @Autowired
    private GjestRepository repo;

    @PostMapping("/lagreAlleBilletter")
    public void lagreAlle(Gjest innGjest) {
        repo.lagreGjester(innGjest);
    }

    @GetMapping("/hentAlleBilletter")
    public List<Gjest> hentAlle() {
        return repo.hentAlle();
    }


    @GetMapping("/slettAlleBilletter")
    public void slettAlle() {
        repo.slettAlle();
    }

}
