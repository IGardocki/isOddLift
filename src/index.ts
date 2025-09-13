function isOddLift(lift: string): boolean {
    const normalized = lift.toLowerCase();
    return normalized !== "squat" && normalized !== "deadlift";
}
export = isOddLift;
  