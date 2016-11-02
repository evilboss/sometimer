/**
 * Created by jr on 5/3/16.
 */
Picker.route('/hello', (params, request, response, next) => {
  // Handle our request and response here.
  console.log('Hello API called');
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  let payload = {response: 'hello', data: 'none', method: request.method, token: ''};
  response.end(JSON.stringify(payload));
});
Picker.route('/csv', (params, request, response, next) => {
  const filename = 'dummydata.csv';
  var fileData = "";
  response.setHeader({
    'Content-type': 'text/csv',
    'Content-Disposition': "attachment; filename=" + filename
  });
  response.statusCode = 200;
  var records = DummyData.find();
  // build a CSV string. Oversimplified. You'd have to escape quotes and commas.
  records.forEach(function (rec) {
    fileData += rec.Name + "," + rec.Address + "," + rec.Description + "\r\n";
  });
  this.response.writeHead(200, headers);
  return this.response.end(fileData);
});