import { Skeleton } from "@nextui-org/react";

export default function CardOwnerSkeleton() {
  return (
    <>
      <Skeleton className="rounded-lg">
        <div className="h-4 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="flex flex-col">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </>
  );
}
