package pl.koneckimarcin.mybodymanagementreact.monthly;

import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.koneckimarcin.mybodymanagementreact.entry.Entry;
import pl.koneckimarcin.mybodymanagementreact.entry.EntryControllerJpa;
import pl.koneckimarcin.mybodymanagementreact.entry.EntryRepository;
import pl.koneckimarcin.mybodymanagementreact.entry.EntryService;

import java.util.List;

@RestController
public class WelcomeController {

    EntryRepository entryRepository;
    EntryService entryService;

    public WelcomeController(EntryRepository entryRepository, EntryService entryService) {
        this.entryRepository = entryRepository;
        this.entryService = entryService;
    }

    @GetMapping("/welcome")
    public List<MonthlySummary> monthlySummary(){

        List<Entry> entries = entryRepository.findAll(Sort.by(Sort.Order.desc("entryDate")));
        return entryService.monthlySummaries(entries);
    }
}
