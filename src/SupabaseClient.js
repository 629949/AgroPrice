import {SupabaseClient} from '@supabase/supabase-js';

const supabaseUrl = process.env.DATABASE_URL;
const supabaseAnonKey = process.env.DATA_ANONKEY;

export default new SupabaseClient(supabaseUrl, supabaseAnonKey);