import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN as string,
});

export default async function createPreference(amount: number) {
  try {
    const transactionId = crypto.randomUUID();
    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: [
          {
            id: transactionId,
            title: "Doação",
            quantity: 1,
            currency_id: "BRL",
            unit_price: amount,
          },
        ],
      },
    });
    return response.id;
  } catch (error) {
    console.error("Erro ao criar preferencia", error);
    throw Error;
  }
}
