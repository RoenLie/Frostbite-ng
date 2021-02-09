const admin = require("firebase-admin");
const serviceAccount = require("../../secrets/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const faker = require("faker");
const db = admin.firestore();

const categories = [
  "office",
  "recreational",
  "leisure",
  "tasks",
  "community",
  "other",
];

const getCat = () => {
  const index = Math.ceil(Math.random() * 100) % categories.length;
  return categories[index];
};

const fakeIt = async () => {
  return db.collection("suggestions").add({
    state: "new",
    category: getCat(),
    title: faker.company.catchPhrase(),
    description: faker.commerce.productDescription(),
    stars: Math.ceil(Math.random() * 100) % 5,
    favoritedBy: [],
  });
};

Array(200).fill(0).forEach(fakeIt);
