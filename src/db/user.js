const Mock = require("mockjs");

Mock.mock(RegExp("http://api/user$"), "post", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/user/[^/]*$"), "put", options => {
  console.debug(JSON.parse(options.body));
});

Mock.mock(RegExp("http://api/agent/[^/]*$"), "get", options => {
  const agent = {
    id: options.url.split("/").pop(),
    name: "@name",
    description: "@paragraph",
    webhook: "webhook"
  };
  return Mock.mock(agent);
});

Mock.mock(RegExp("http://api/user/login"), "get", {
  "list|5-14": [
    {
      id: "@guid",
      name: "@name",
      description: "@paragraph",
      webhook: "webhook"
    }
  ]
});