"use client";

import { useState } from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Home() {
  initMercadoPago("<PUBLIC_KEY>");

  const [amount, setAmountValue] = useState(0);
  const [preferenceId, setPreferenceId] = useState("");

  const handleDonation = async () => {
    try {
      if (!amount || isNaN(amount)) {
        alert("Por favor, insira um valor válido para a doação.");
        return;
      }
      const response = await fetch("/api/handler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("Erro ao processar a doação");
      }

      const responseData = await response.json();
      setPreferenceId(responseData.preferenceId);
    } catch (error) {
      console.error("Erro ao criar preferência:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <h1>Faça sua doação</h1>
        <input
          type="text"
          placeholder="Insira um valor"
          className="border text-black border-gray-400 p-2 rounded-lg w-96"
          onChange={(ev) => {
            setAmountValue(parseFloat(ev.target.value));
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg w-96"
          onClick={handleDonation}
        >
          Doar
        </button>

        {preferenceId && (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        )}
      </div>
    </main>
  );
}
