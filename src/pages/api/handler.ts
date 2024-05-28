import { NextApiRequest, NextApiResponse } from "next";

import createPreference from "./create_preference";

type ResponseData = {
  message: string;
  preferenceId?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      const preferenceId = await createPreference(amount);
      res.status(200).json({
        message: "Preferência criada com sucesso",
        preferenceId: preferenceId,
      });
    } catch (error) {
      console.error("Erro ao criar preferencia", error);
      res.status(500).json({ message: "Erro ao processar solicitação" });
    }
  }
}
