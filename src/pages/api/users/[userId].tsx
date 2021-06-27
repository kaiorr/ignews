import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: "Kaio Ribeiro" },
    { id: 2, name: "Totoia" },
  ];

  return response.json(users);
};
