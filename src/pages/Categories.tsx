import { useState, useMemo } from 'react';
import { useCategories } from '@/lib/hooks';
import CategoryCard from '@/components/CategoryCard';
import { Search, Loader2 } from 'lucide-react';

export default function Categories() {
    const { categories, loading, error } = useCategories();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = useMemo(() => {
        return categories.filter(cat =>
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [categories, searchQuery]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading categories...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-red-500">
                    <p>Error loading categories: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-16 px-4">
            <div className="container mx-auto max-w-[1800px]">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                        Explore Categories
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Discover new recipes and flavors by browsing our curated collection of culinary categories.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16 px-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" size={24} />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all font-medium text-lg"
                        />
                    </div>
                </div>

                {filteredCategories.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {filteredCategories.map((category, index) => (
                            <CategoryCard key={category.id} category={category} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-gray-500 text-xl">No categories found matching "{searchQuery}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}
