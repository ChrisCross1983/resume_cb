let visitorCount = 0; 

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    visitorCount++;
    return {
      statusCode: 200,
      body: JSON.stringify({ count: visitorCount }),
    };
  }
};
