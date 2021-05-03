const timeline = [
  {
    id: 1,
    avatar: "",
    username: "",
    message: "",
  },
  {
    id: 2,
    avatar: "",
    username: "",
    message: "",
  },
  {
    id: 3,
    avatar: "",
    username: "",
    message: "",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
