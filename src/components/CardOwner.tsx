import { Image, Link } from "@nextui-org/react";
import { UserType } from "../types";
import { useStore } from "../store/useStore";
import { useEffect, useId, useState } from "react";
import { getUser } from "../services";

type CardOwnerProps = {
  userId: UserType["id"];
};
export default function CardOwner({ userId }: CardOwnerProps) {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    const fetch = async () => {
      const owner = await getUser(userId);
      if (owner) {
        console.log(owner);
        setUser(owner);
      }
    };
    fetch();
  }, []);

  const getUserName = (): string => {
    return `${user?.firstName} ${user?.lastName}`;
  };

  return (
    <>
      <Image
        alt="nextui logo"
        height={40}
        radius="sm"
        src={user?.image}
        width={40}
      />
      <div className="flex flex-col">
        <Link href="" className="text-lg line-clamp-1 font-semibold">
          <p>{user?.username}</p>
        </Link>
        <p className="text-small text-default-500">{getUserName()}</p>
      </div>
    </>
  );
}
