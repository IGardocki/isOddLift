"use strict";
function isOddLift(lift) {
    const normalized = lift.toLowerCase();
    return normalized !== "squat" && normalized !== "deadlift";
}
module.exports = isOddLift;
