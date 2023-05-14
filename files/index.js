const path = require("path");
const fs = require("fs/promises");
// console.log(__dirname);

const usersPath = path.join(__dirname, "..", "db", "users.json");
// console.log(usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    return await fs.readFile(this.path, "utf-8");
  }

  async create(data) {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async update(data) {
    const usersArr = JSON.parse(await this.read());
    usersArr.push(data);
    return await fs.writeFile(this.path, JSON.stringify(usersArr, null, 2));
  }

  async remove() {
    return await fs.unlink(this.path);
  }

  async dispay() {
    console.log(JSON.parse(await this.read()));
  }
}

const file = new FileOperations(usersPath);

const data = [
  {
    name: "Ruslan",
  },
  {
    name: "Oleg",
  },
  {
    name: "Spartak",
  },
];
// file.dispay();
// file.create(data);
// file.update({ name: "Andrii" });
// file.remove();

async function tryCatchHandler(fn) {
  try {
    await fn;
  } catch (error) {
    console.log(error.message);
  }
}

// tryCatchHandler(file.create(data).call(file));
// tryCatchHandler(file.update({ name: "Andrii" }).call(file));
// tryCatchHandler(file.remove().call(file));
tryCatchHandler(file.dispay.call(file));
