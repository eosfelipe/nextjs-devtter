const timeline = [
  {
    id: 1,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "@eosfelipe",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
  {
    id: 2,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "midudev",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
  {
    id: 3,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "@juanp",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
  {
    id: 4,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "@eosfelipe",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
  {
    id: 5,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "midudev",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
  {
    id: 6,
    avatar:
      "https://lh3.googleusercontent.com/proxy/3WYN8iUvwPTaabHfHBKau4toIg_qI4dsUVRHxVnHMUv-W4dO5-327DqRk_0e4oRTO0-xuAt8-3I9qe0gYAMKHRpM50LmX3VJ5xYAXG7b5f2McP7jvik",
    username: "@juanp",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
