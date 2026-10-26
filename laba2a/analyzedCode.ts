function checkAccess(age: number, hasTicket: boolean, isVIP: boolean): string {
    let status = "Denied";

    if (isVIP) {
        status = "VIP Access";
    } else if (hasTicket && age >= 18) {
        status = "Standard Access";
    } else {
        status = "No Access";
    }

    return status;
}

function validateUserData(user: any): boolean {
    let isValid = false;

    if (user !== null) {
        if (user.age >= 18) {
            if (user.email && user.email.includes("@")) {
                if (user.role === "admin" || user.role === "editor") {
                    isValid = true;
                }
            }
        }
    }

    return isValid;
}

function processMatrix(matrix: number[][], operation: string): number {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        let j = 0;
        while (j < matrix[i].length) {
            switch (operation) {
                case "positive":
                    if (matrix[i][j] > 0) count++;
                    break;
                case "negative":
                    if (matrix[i][j] < 0) count++;
                    break;
                case "zero":
                    if (matrix[i][j] === 0) count++;
                    break;
                default:
                    break;
            }
            j++;
        }
    }

    return count;
}