import axios from "axios";

export const fetchImage = async () => {
  const response = await axios.get("https://api.openai.com/v1/images/dalle/generate", {
    headers: {
      Authorization: "Bearer YOUR_OPENAI_API_KEY",
      "Content-Type": "application/json",
    },
    data: {
      prompt: "a description of the image you want",
      n: 1,
      size: "256x256",
    },
  });

  return response.data;
};
