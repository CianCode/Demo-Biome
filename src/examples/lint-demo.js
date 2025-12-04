// 🔍 LINTING DEMO
// This file has intentional lint issues that Biome will catch

// 1. Unused variables
const unusedVariable = "I'm never used";
let anotherUnused = 42;

// 2. Using var instead of let/const
var oldStyleVariable = "Should use const or let";

// 3. Comparing with == instead of ===
function checkEquality(a, b) {
    if (a == b) {
        console.log("Equal (loose)");
    }
    if (a != b) {
        console.log("Not equal (loose)");
    }
}

// 4. Using debugger statement
function problematicFunction() {
    debugger;
    return "debugging";
}

// 5. Empty block statements
function emptyBlocks(condition) {
    if (condition) {
    }
    try {
        throw new Error("test");
    } catch (e) {
    }
}

// 6. Reassigning function parameters
function reassignParam(param) {
    param = "new value";
    return param;
}

// 7. Using delete on variables
let toDelete = { key: "value" };

// 8. Unnecessary boolean literal comparisons
function booleanComparisons(flag) {
    if (flag === true) {
        return true;
    }
    if (flag === false) {
        return false;
    }
}

// 9. Self comparison (always true/false)
function selfComparison(x) {
    return x === x;
}

// 10. Double negation that can be simplified
function doubleNegation(value) {
    return !!value ? "truthy" : "falsy";
}

// 11. Array.forEach could be for...of
const items = [1, 2, 3];
items.forEach(function(item) {
    console.log(item);
});

// 12. Using instanceof to check for primitive types
function typeCheck(value) {
    if (typeof value === "undefined") {
        return "undefined";
    }
}

export { checkEquality, problematicFunction };
