/* config vars must be global */

API      = "https://data.ripple.com/v2" //moved to deployment.environments.json;
//MIXPANEL = "" //moved to deployment.environments.json;

Options = {
  theme     : "light",
  base      : {currency:"BTC", issuer:"rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"},
  trade     : {currency:"XRP", issuer:""},
  chartType : "line",
  interval  : "15m",
  range     : {name: "1d"},

  ripple    : {
    trace   : false,
    trusted : false,
    servers: [
      { host: 's-west.ripple.com', port: 443, secure: true },
      { host: 's-east.ripple.com', port: 443, secure: true }
    ],
    connection_offset: 0
  }
}
