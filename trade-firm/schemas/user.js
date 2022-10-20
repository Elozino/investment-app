export default {
  name: "user",
  title: "User Info",
  type: "document",
  fields: [
    {
      name: "user_full_name",
      title: "Full Name",
      type: "string",
      options: {
        maxLength: 40,
      },
    },
    {
      name: "user_email",
      title: "Email",
      type: "string",
    },
    {
      name: "user_id",
      title: "User-Id",
      type: "string",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "user_btc",
      title: "BTC",
      type: "number",
    },
    {
      name: "user_usd",
      title: "USD",
      type: "number",
    },
  ],
};