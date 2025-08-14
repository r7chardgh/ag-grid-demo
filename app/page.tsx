import HKMADailyMonetaryStat from "@/components/usersGrid/HKMADailyMonetaryStat";
import UsersGrid from "@/components/usersGrid/UsersGrid";

export default async function Home() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <h1 className=" text-2xl capitalize font-bold">home page</h1>
      <div className="flex flex-col gap-9">
        <UsersGrid />
        <HKMADailyMonetaryStat/>
      </div>
    </main>
  );
}
