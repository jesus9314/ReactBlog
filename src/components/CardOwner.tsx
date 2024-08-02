import { Image, Link } from "@nextui-org/react";
import { UserType } from "../types";
import { getUser } from "../services";
import { useQuery } from "@tanstack/react-query";
import CardOwnerSkeleton from "./skeletons/CardOwnerSkeleton";

type CardOwnerProps = {
  userId: UserType["id"];
};
export default function CardOwner({ userId }: CardOwnerProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["owner"],
    queryFn: () => getUser(userId),
  });

  const getUserName = (): string => {
    return `${data?.firstName} ${data?.lastName}`;
  };

  return (
    <>
      {isLoading ? (
        <CardOwnerSkeleton />
      ) : (
        <>
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={data?.image}
            width={40}
          />
          <div className="flex flex-col">
            <Link href="" className="text-lg line-clamp-1 font-semibold">
              <p>{data?.username}</p>
            </Link>
            <p className="text-small text-default-500">{getUserName()}</p>
          </div>
        </>
      )}
    </>
  );
}
