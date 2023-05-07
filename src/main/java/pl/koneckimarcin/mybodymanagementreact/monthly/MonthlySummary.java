package pl.koneckimarcin.mybodymanagementreact.monthly;

public class MonthlySummary {

    private String month;
    private float startWeight;
    private float endWeight;
    private int totalSteps;
    private int activeDaysCount;
    private int regenerationDaysCount;

    public MonthlySummary(String month, float startWeight, float endWeight, int totalSteps, int activeDaysCount, int regenerationDaysCount) {
        this.month = month;
        this.startWeight = startWeight;
        this.endWeight = endWeight;
        this.totalSteps = totalSteps;
        this.activeDaysCount = activeDaysCount;
        this.regenerationDaysCount = regenerationDaysCount;
    }

    public float getStartWeight() {
        return startWeight;
    }

    public void setStartWeight(float startWeight) {
        this.startWeight = startWeight;
    }

    public float getEndWeight() {
        return endWeight;
    }

    public void setEndWeight(float endWeight) {
        this.endWeight = endWeight;
    }

    public int getTotalSteps() {
        return totalSteps;
    }

    public void setTotalSteps(int totalSteps) {
        this.totalSteps = totalSteps;
    }

    public int getActiveDaysCount() {
        return activeDaysCount;
    }

    public void setActiveDaysCount(int activeDaysCount) {
        this.activeDaysCount = activeDaysCount;
    }

    public int getRegenerationDaysCount() {
        return regenerationDaysCount;
    }

    public void setRegenerationDaysCount(int regenerationDaysCount) {
        this.regenerationDaysCount = regenerationDaysCount;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    @Override
    public String toString() {
        return "MonthlySummary{" +
                "month='" + month + '\'' +
                ", startWeight=" + startWeight +
                ", endWeight=" + endWeight +
                ", totalSteps=" + totalSteps +
                ", activeDaysCount=" + activeDaysCount +
                ", regenerationDaysCount=" + regenerationDaysCount +
                '}';
    }
}
