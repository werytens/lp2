const target = { main: "testMessage" };

const handler = {
  get: (target, property) => {
    console.log("get item: ", target[property]);

    return Reflect.get(target, property);
  },
  set: (target, property, value) => {
    console.log("set item: ", target[property], "to: ", value);

    return Reflect.set(target, property, value);
  },
};

const proxy = new Proxy(target, handler);

Reflect.set(proxy, "main", "Vasya");
Reflect.get(proxy, "main");
