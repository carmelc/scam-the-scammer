import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Thank You | bank hapoalim",
  description: "Approve transaction in order to confirm the transaction."
};

export default function ThankYou() {
  return (
    <div className="mx-4">
      <h1 className="text-white">Information Submitted</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 min-h-10">
        Your information is submitted successfully. Once the information is verified, the transaction will be complete.
      </div>
    </div>
  );
}
