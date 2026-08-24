/**
 * Matrix Zero Guardian
 * 
 * A matrix processing utility that detects zero values
 * and updates related rows and columns efficiently.
 */

function applyZeroRulesToMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    let firstRowContainsZero = false;
    let firstColumnContainsZero = false;

    // Check first row
    for (let column = 0; column < columns; column++) {
        if (matrix[0][column] === 0) {
            firstRowContainsZero = true;
            break;
        }
    }

    // Check first column
    for (let row = 0; row < rows; row++) {
        if (matrix[row][0] === 0) {
            firstColumnContainsZero = true;
            break;
        }
    }

    // Create markers using first row and first column
    for (let row = 1; row < rows; row++) {
        for (let column = 1; column < columns; column++) {
            if (matrix[row][column] === 0) {
                matrix[row][0] = 0;
                matrix[0][column] = 0;
            }
        }
    }

    // Apply zero updates using markers
    for (let row = 1; row < rows; row++) {
        for (let column = 1; column < columns; column++) {
            if (matrix[row][0] === 0 || matrix[0][column] === 0) {
                matrix[row][column] = 0;
            }
        }
    }

    // Update first row
    if (firstRowContainsZero) {
        for (let column = 0; column < columns; column++) {
            matrix[0][column] = 0;
        }
    }

    // Update first column
    if (firstColumnContainsZero) {
        for (let row = 0; row < rows; row++) {
            matrix[row][0] = 0;
        }
    }

    return matrix;
}


// Example usage
const warehouseData = [
    [10, 20, 30],
    [40, 0, 60],
    [70, 80, 90]
];

console.log(applyZeroRulesToMatrix(warehouseData));
