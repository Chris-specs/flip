const seasonInfo = () => {
    const current = () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;

        if (currentMonth >= 3 && currentMonth <= 5) {
            return "SPRING";
        }
        if (currentMonth >= 6 && currentMonth <= 8) {
            return "SUMMER";
        }
        if (currentMonth >= 9 && currentMonth <= 11) {
            return "FALL";
        }
        if (currentMonth >= 12 || currentMonth <= 2) {
            return "WINTER";
        }
    }

    const currentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    const next = () => {
        if (current() === "SPRING") {
            return "SUMMER";
        }
        if (current() === "SUMMER") {
            return "FALL";
        }
        if (current() === "FALL") {
            return "WINTER";
        }
        if (current() === "WINTER") {
            return "SPRING";
        }
    }

    const nextYear = () => {
        return currentYear() + 1;
    }

    return {
        current,
        currentYear,
        next,
        nextYear
    }
}

export default seasonInfo;