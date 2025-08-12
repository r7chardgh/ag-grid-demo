import UsersGrid from "@/components/usersGrid/UsersGrid";
import { getDummyUsersByLimit } from "@/lib/serverActions";
import Image from "next/image";

export default async function Home() {
  // const {users} = await getDummyUsersByLimit(10,1);
  // console.log(users.length);

  return (
    <main className="flex flex-col gap-6 p-6">
      <h1 className=" text-2xl capitalize font-bold">home page</h1>
      <div className="">
        <UsersGrid />
      </div>
    </main>
  );
}
