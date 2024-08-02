import PostCard from "../components/PostCard";
import { useStore } from "../store/useStore";
import PostsSkeleton from "../components/skeletons/PostsSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services";
import { useEffect } from "react";

export default function MainPage() {
  const { fetchingAllPosts, posts } = useStore();
  const { isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
  useEffect(() => {
    if (data) {
      fetchingAllPosts(data);
    }
  }, []);
  return (
    <div className="w-full p-12">
      <div className="flex flex-col gap-4 items-center md:flex-row md:gap-0 md:items-end justify-between mb-12 header">
        <div className="title">
          <p className="mb-4 text-4xl font-bold text-gray-800">
            Lastest articles
          </p>
          <p className="text-2xl font-light text-gray-400">
            All article are verified by 2 experts and valdiate by the CTO
          </p>
        </div>
        <div className="text-end">
          <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Search'
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <PostsSkeleton />
        ) : (
          posts?.posts.map((post) => <PostCard post={post} key={post.id} />)
        )}
        {/* <PostsSkeleton /> */}
      </div>
    </div>
  );
}
