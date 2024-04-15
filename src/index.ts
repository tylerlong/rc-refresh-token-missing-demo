import { SDK } from '@ringcentral/sdk';

const rc = new SDK({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

(async () => {
  // refresh it without first getting the token
  await rc.refresh();
})();
