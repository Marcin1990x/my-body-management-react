package pl.koneckimarcin.mybodymanagementreact.entry;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class EntryController {

    private EntryService entryService;
    private EntryRepository entryRepository;

    public EntryController(EntryRepository entryRepository, EntryService entryService) {
        this.entryRepository = entryRepository;
        this.entryService = entryService;
    }

    @GetMapping("entries-list")
    public List<Entry> listEntries() {
        return entryRepository.findAll();
    }

    @GetMapping("entries-list/{page}")
    public List<Entry> listEntriesOnePage(@PathVariable int page){
        return entryRepository.findAll(PageRequest.of(page, 10, Sort.by(Sort.Order.desc("entryDate"))))
                .stream().collect(Collectors.toList());
    }

    @DeleteMapping("entries-list/{id}")
    public ResponseEntity<Void> deleteEntryById(@PathVariable int id) {
        entryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("entries-list")
    public Entry addEntry (@RequestBody Entry entry){
        Entry createdEntry = entryRepository.save(entry);
        return createdEntry;
    }

    @GetMapping("entry/{id}")
    public Optional<Entry> retrieveEntry (@PathVariable int id){
        return entryRepository.findById(id);
    }

    @PutMapping("entry/{id}")
    public Entry updateEntry (@PathVariable int id, @RequestBody Entry entry) {
        return entryRepository.save(entry);
    }

    @GetMapping("pages")
    public List<Integer> getPagesList(){
        return entryService.getPageCount(entryRepository.findAll(), 10);
    }

    @GetMapping("duplicate/{date}")
    public boolean checkForDuplicate(@PathVariable LocalDate date){
        return entryService.checkForDataDuplicate(date, entryRepository.findAll());
    }
}