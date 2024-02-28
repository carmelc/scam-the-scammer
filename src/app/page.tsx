import IdentificationForm from "@/app/components/IdentificationForm";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Identification Form | bank hapoalim",
  description: "Approve transaction in order to confirm the transaction."
};

export default function Home() {
  return (<IdentificationForm/>);
}
