"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rental {
    constructor(movie, daysRented) {
        this._movie = movie;
        this._daysRented = daysRented;
    }
    getDaysRented() {
        return this._daysRented;
    }
    getMovie() {
        return this._movie;
    }
    getFrequentRenterPoints() {
        return this._movie.getFrequentRenterPoints(this._daysRented);
    }
    getCharge() {
        return this._movie.getCharge(this._daysRented);
    }
}
exports.default = Rental;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVudGFsLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLph43mnoTmioDlt6cv6YeN5p6ELeaUueWWhOaXouacieS7o+eggeeahOiuvuiuoS/ph43mnoTlkI4vUmVudGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsTUFBTTtJQUl2QixZQUFZLEtBQVksRUFBRSxVQUFrQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQTtJQUNqQyxDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVNLHVCQUF1QjtRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFHTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDbEQsQ0FBQztDQUVKO0FBMUJELHlCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW50YWwge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW92aWU6IE1vdmllO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF5c1JlbnRlZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdmllOiBNb3ZpZSwgZGF5c1JlbnRlZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbW92aWUgPSBtb3ZpZTtcclxuICAgICAgICB0aGlzLl9kYXlzUmVudGVkID0gZGF5c1JlbnRlZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXlzUmVudGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXlzUmVudGVkXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vdmllKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZpZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGcmVxdWVudFJlbnRlclBvaW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92aWUuZ2V0RnJlcXVlbnRSZW50ZXJQb2ludHModGhpcy5fZGF5c1JlbnRlZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldENoYXJnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92aWUuZ2V0Q2hhcmdlKHRoaXMuX2RheXNSZW50ZWQpXHJcbiAgICB9XHJcblxyXG59Il19