import { redirect } from "next/navigation";

const defaultCatagory = "08";

export default async function Home() {
 redirect(`/category/${defaultCatagory}`);
}
