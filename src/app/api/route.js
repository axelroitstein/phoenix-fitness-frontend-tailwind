import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "20.00",
          breakdown: {
            item_total: {
                currency_code: "USD",
                value: "20.00"
            }
          }
        },
        items: [
          {
            name: "Cuota mensual del Gimnasio",
            description:
              "Estás pagando la cuota mensual del gimnasio. Te llegará un Mail indicando cuando debes pagar nuevamente",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "10.00",
            }
          },
          {
            name: "Cuota mensual 2",
            description: "asdasdasdasf",
            quantity: "1",
            unit_amount: {
                currency_code: "USD",
                value: "10.00"
            }
          }
        ],
      },
    ],
  });

  const response = await client.execute(request);
  console.log(response);

  return NextResponse.json({
    id: response.result.id, 
  });
}