// eslint-disable-next-line import/no-anonymous-default-export
export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "debo-notes-app-uploads",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://dw1ggna7kh.execute-api.ap-southeast-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_dEPAcMWxi",
    APP_CLIENT_ID: "2nf4cb40e5mp1r8r9lj6k6roht",
    IDENTITY_POOL_ID: "ap-southeast-2:b6659c52-ab29-43e7-80c2-05d973aa9d97",
  },
};
