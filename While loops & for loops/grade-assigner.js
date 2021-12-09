function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}
for (i = 60; i < 101; i++) {
    const check = assignGrade(i);
    console.log("For scoring " + i + " points, you get an " + check)
};
// For scoring 60 points, you get an E
//  For scoring 61 points, you get an E
//  For scoring 62 points, you get an E
//  For scoring 63 points, you get an E
//  For scoring 64 points, you get an E
//  For scoring 65 points, you get an E
//  For scoring 66 points, you get an D
//  For scoring 67 points, you get an D
//  For scoring 68 points, you get an D
// For scoring 69 points, you get an D
//  For scoring 70 points, you get an D
// VM146:16 For scoring 71 points, you get an C
// VM146:16 For scoring 72 points, you get an C
// VM146:16 For scoring 73 points, you get an C
// VM146:16 For scoring 74 points, you get an C
// VM146:16 For scoring 75 points, you get an C
// VM146:16 For scoring 76 points, you get an C
// VM146:16 For scoring 77 points, you get an C
// VM146:16 For scoring 78 points, you get an C
// VM146:16 For scoring 79 points, you get an C
// VM146:16 For scoring 80 points, you get an C
// VM146:16 For scoring 81 points, you get an B
// VM146:16 For scoring 82 points, you get an B
// VM146:16 For scoring 83 points, you get an B
// VM146:16 For scoring 84 points, you get an B
// VM146:16 For scoring 85 points, you get an B
// VM146:16 For scoring 86 points, you get an B
// VM146:16 For scoring 87 points, you get an B
// VM146:16 For scoring 88 points, you get an B
// VM146:16 For scoring 89 points, you get an B
// VM146:16 For scoring 90 points, you get an B
// VM146:16 For scoring 91 points, you get an A
// VM146:16 For scoring 92 points, you get an A
// VM146:16 For scoring 93 points, you get an A
// VM146:16 For scoring 94 points, you get an A
// VM146:16 For scoring 95 points, you get an A
// VM146:16 For scoring 96 points, you get an A
// VM146:16 For scoring 97 points, you get an A
// VM146:16 For scoring 98 points, you get an A
// VM146:16 For scoring 99 points, you get an A
// VM146:16 For scoring 100 points, you get an A
