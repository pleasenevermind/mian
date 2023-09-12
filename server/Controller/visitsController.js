const Visits = require("../Models/VisitsTracker");
exports.addVisit = async (req, res) => {
    try {
        const { visits } = req.body;
        
        // Create a new website visit entry in the database
        await Visits.create({ visits });

        res.json({ message: 'Website visit data added successfully' });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.getVisit = async (req, res) => {
    try {
        // Fetch all website visits from the database
        const websiteVisits = await Visits.find().sort({ date: 1 }).exec();

        // Extract only the 'visits' values from the database records
        const visitsData = websiteVisits.map(visit => visit.visits);

        res.json({ visits: visitsData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}