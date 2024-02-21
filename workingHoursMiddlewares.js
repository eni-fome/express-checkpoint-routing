const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();

    // Check if it's a working day (Monday to Friday) and working hours (9 AM to 5 PM)
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next(); // Continue to the next middleware or route handler
    } else {
        res.send('Sorry, the website is only available during working hours (Monday to Friday, from 9 AM to 5 PM).');
    }
};

module.exports = checkWorkingHours;
