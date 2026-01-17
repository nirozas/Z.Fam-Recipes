import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    console.error('Missing VITE_SUPABASE_URL. Please check your .env file.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
    console.error('Missing VITE_SUPABASE_ANON_KEY. Please check your .env file.');
}

export const supabase = createClient(
    supabaseUrl || 'https://your-project.supabase.co',
    supabaseAnonKey || 'your-anon-key'
);
