import Mock from "mockjs"; // 引入mockjs
import qs from "qs";
Mock.setup({
  timeout: 1000
});

const List = [];
const count = 100;
function getUrlParams(str) {
  let query = str.split("?");
  return (query[1] && qs.parse(query[1])) || {};
}
const baseContent =
  '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri =
  "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3";

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      timestamp: +Mock.Random.date("T"),
      author: "@first",
      reviewer: "@first",
      title: "@title(5, 10)",
      content_short: "mock data",
      content: baseContent,
      forecast: "@float(0, 100, 2, 2)",
      importance: "@integer(1, 3)",
      "type|1": ["CN", "US", "JP", "EU"],
      "status|1": ["published", "draft", "deleted"],
      display_time: "@datetime",
      comment_disabled: true,
      pageviews: "@integer(300, 5000)",
      image_uri,
      platforms: ["a-platform"]
    })
  );
}

const articles = [
  {
    url: "/article/list",
    type: "get",
    response: config => {
      //   console.log(config);
      const params = qs.parse(config.url);
      const { importance, type, title, page = 1, limit = 20, sort } = params;

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false;
        if (type && item.type !== type) return false;
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });

      if (sort === "-id") {
        mockList = mockList.reverse();
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      };
    }
  },

  {
    url: "/article/detail",
    type: "get",
    response: config => {
      const p = getUrlParams(config.url);
      const { id } = p;
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          };
        }
      }
    }
  },

  {
    url: "/article/pv",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: "PC", pv: 1024 },
            { key: "mobile", pv: 1024 },
            { key: "ios", pv: 1024 },
            { key: "android", pv: 1024 }
          ]
        }
      };
    }
  },

  {
    url: "/article/create",
    type: "post",
    response: () => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },

  {
    url: "/article/update",
    type: "post",
    response: () => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },
  {
    url: "/login",
    type: "post",
    response: () => {
      return {
        code: 20000,
        message: "success",
        data: {
          token: "99999"
        }
      };
    }
  }
];
for (let i of articles) {
  Mock.mock(new RegExp(i.url), i["type"], i["response"]);
}
