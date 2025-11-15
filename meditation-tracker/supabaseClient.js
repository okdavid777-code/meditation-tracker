import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kaafghjteodryapjzbgj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYWZnaGp0ZW9kcnlhcGp6YmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMjg1MjEsImV4cCI6MjA3NzcwNDUyMX0.7-mBVVLjbDrCTxjb9RpjZAfy4XnhK4DYevjVUL_Pe7I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
