import { Skeleton } from "./ui/skeleton";

export default function CategoryCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full" />
            <Skeleton className="h-4 w-20 mx-auto" />
        </div>
    );
}
