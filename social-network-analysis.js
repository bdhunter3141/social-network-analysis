var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


// List everyone and for each of them, list the names of who they follow and who follows them

const listNames = function(arr) {
  let nameList = "";
  for (let id of arr) {
    nameList += data[id].name + ", ";
  }
  return nameList.slice(0, -2);
}


const followsMe = function(person) {
  let followerArr = [];
  for (let follower in data) {
    if (data[follower].follows.find((followPerson) => {
      return followPerson === person;
    })) {
      followerArr.push(follower);
    }
  }
  return followerArr;
}

const listFollowers = function(cb) {
  for (let person in data) {
    console.log("Name: ", data[person].name);
    console.log("Follows: ", listNames(data[person].follows));
    console.log("Followers: ", listNames(cb(person)));
  }
}

listFollowers(followsMe);

// Identify who follows the most people




// Identify who has the most followers




// Identify who has the most followers over 30




// Identify who follows the most people over 30




// List those who follow someone that doesn't follow them back




// List everyone and their reach (sum of # of followers and # of followers of followers)




















