import { Category } from '@/lib/types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    category: Category;
    index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link to={`/category/${category.slug}`} className="block group">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-primary-200 hover:-translate-y-2">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-inner flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {category.image_url ? (
                            <img src={category.image_url} alt={category.name} className="w-full h-full object-cover rounded-2xl" />
                        ) : (
                            getCategoryEmoji(category.slug)
                        )}
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight">
                        {category.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Explore Recipes
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}

function getCategoryEmoji(slug: string) {
    switch (slug) {
        case 'breakfast': return '🍳';
        case 'lunch': return '🥗';
        case 'dinner': return '🍝';
        case 'dessert': return '🍰';
        default: return '🍽️';
    }
}
