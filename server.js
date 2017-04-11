// SETUP
// =============================================================================
let express    = require('express');
let app = express();
let port = process.env.PORT || 3000; // set our port

// REGISTER ROUTES & HOST STATIC FILES
// =============================================================================
app.use(express.static('public'));
app.use(express.static('views'));

// START THE SERVER
// =============================================================================
app.listen(port);
