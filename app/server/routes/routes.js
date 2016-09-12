/**
 * Created by jr on 5/3/16.
 */
Picker.route('/hello', (params, request, response, next) => {
  // Handle our request and response here.
  console.log('Hello API called');
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  let payload = {response: 'hello', data: 'none', method: request.method, token: 'tokenpuki'};
  response.end(JSON.stringify(payload));
});