"use client"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalFunction() {
  return (
    <>
        <main>
          <PayPalScriptProvider
            options={{
              clientId:
                "Af9pksHVQHa9flOr6-v4y-V7UI9nVJW6UvP7Kl5l6G2mgvmtsp3Ew9ZYgYgx-XRdcdMKlD-x2K-ngmmY",
            }}
          >
            <PayPalButtons
              style={{
                color: "black"
              }}
              createOrder={async () => {
                const res = await fetch("/api/checkout", {
                  method: "POST",
                });
                const order = await res.json();
                console.log(order);
                return order.id;
              }}
              onApprove={(data, actions) => {
                console.log(data);
                actions.order.capture();
              }}
              onCancel={(data) => {
                console.log("Cancelled", data);
              }}
            />
          </PayPalScriptProvider>
        </main>
    </>
  );
}