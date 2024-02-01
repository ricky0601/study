const { BardAPI } = require('bard-api-node');

async function testAssistant() {
  try {
    const assistant = new BardAPI();

    // Set session information for authentication
    await assistant.setSession('__Secure-1PSID', 'g.a000fwis1Xf3ivyOXMtpBtzbv8Y7yY3CRybtZZPOylakmXAGeYnbf3IyjVe-UqgNSVGj2Cx4VAACgYKAfISAQASFQHGX2MiJorCRAkBag7BSfeYCsz87BoVAUF8yKq012DqVnyMrFPqkQmLXLZ60076'); // or '__Secure-3PSID'
    // ...

    // Send a query to Bard
    const response = await assistant.getBardResponse('Hello, how are you?');
    console.log('Bard:', response.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAssistant();

export default BardTest;