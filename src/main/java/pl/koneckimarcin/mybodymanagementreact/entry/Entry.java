package pl.koneckimarcin.mybodymanagementreact.entry;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PastOrPresent;

import java.time.LocalDate;

@Entity
public class Entry {

    public Entry() {
    }

    @Id
    @GeneratedValue
    private int id;
    private String username;
    @PastOrPresent(message = "The date cannot be from the future.")
    private LocalDate entryDate;
    @Min(value = 40, message = "Put correct weight.")
    @Max(value = 150, message = "Put correct weight.")
    private float weight;
    @Min(value = 1, message = "Please enter the correct number of steps.")
    @Max(value = 80000, message = "Please enter the correct number of steps.")
    private int steps;
    private String comment;

    public Entry(int id, String username, LocalDate entryDate, float weight, int steps, String comment) {
        this.id = id;
        this.username = username;
        this.entryDate = entryDate;
        this.weight = weight;
        this.steps = steps;
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public int getSteps() {
        return steps;
    }

    public void setSteps(int steps) {
        this.steps = steps;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "Entry{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", entryDate=" + entryDate +
                ", weight=" + weight +
                ", steps=" + steps +
                ", description='" + comment + '\'' +
                '}';
    }
}
