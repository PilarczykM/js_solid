class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCallories = 0
    }

    trackCalories(calorieCount) {
        this.currentCallories += calorieCount

        if (this.currentCallories > this.maxCalories) {
            this.logCalorieSurplus()
        }
    }

    logCalorieSurplus() {
        console.log("Max calories exceeded!");
    }
}

const calorierTracker = new CalorieTracker(2000)

calorierTracker.trackCalories(500)
calorierTracker.trackCalories(1000)
calorierTracker.trackCalories(700)