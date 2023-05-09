package pl.koneckimarcin.mybodymanagementreact.entry;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EntryControllerJpa {

    private EntryService entryService;
    private EntryRepository entryRepository;

    public EntryControllerJpa(EntryRepository entryRepository, EntryService entryService) {
        this.entryRepository = entryRepository;
        this.entryService = entryService;
    }

    @GetMapping("entries-list")
    public List<Entry> listEntries() {
        return entryRepository.findAll();
    }

    @DeleteMapping("entries-list/{id}")
    public ResponseEntity<Void> deleteEntryById(@PathVariable int id) {
        entryRepository.deleteById(id);
        //return "Deleted entry with id: " + id;
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
/*

    @GetMapping("add-entry")
    public String showAddEntryPage(ModelMap model) {
        Entry entry = new Entry(0, "", LocalDate.now(), 59, 10000, "");
        model.put("entry", entry);
        return "addEntry";
    }

    @PostMapping("add-entry")
    public String addNewEntry(@Valid Entry entry, BindingResult result) {
        if (result.hasErrors()) {
            return "addEntry";
        }

        entry.setUsername(getLoggedInUsername());
        List<Entry> entriesList = entryRepository.findAll();
        // put message for user about data duplication
        if (entryService.checkForDataDuplicate(entry.getEntryDate(), entriesList)) {
            entryRepository.save(entry);
            return "redirect:entries";
        }
        return "addEntry";
    }

    // 1 of 2: find entry by id and put it to model
    @GetMapping("update-entry")
    public String findById(@RequestParam int id, ModelMap model) {
        Entry entry = entryRepository.findById(id).get();
        model.put("entry", entry);
        return "addEntry";
    }

    // 2 of 2: then delete entry and add updated
    @PostMapping("update-entry")
    public String updateEntry(@Valid Entry entry, BindingResult result) {
        if (result.hasErrors()) {
            return "addEntry";
        }
        // put here data duplicate validation
        entry.setId(entry.getId());
        entry.setUsername(getLoggedInUsername());
        entryRepository.save(entry);
        return "redirect:entries";
    }*/
}