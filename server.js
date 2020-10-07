// Not totally sure if this will work. Def look at later.
const app = require('./config/app.js');
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./controllers/view-routes')(app);
require('./controllers/api-routes')(app);

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});