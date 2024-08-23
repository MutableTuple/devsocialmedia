import Image from "next/image";
import Navbar from "./_components/Navbar";
import UserStories from "./_components/UserStories";
import UserPostBox from "./_components/UserPostBox";
import UserPostsAndFollwing from "./_components/UserPostsAndFollwing";
import MobileNavigation from "./_components/MobileNavigation";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <UserStories />
      <UserPostBox />
      <UserPostsAndFollwing />
      <MobileNavigation />
    </main>
  );
}
