import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnpvvdemizqrorkjlfsr.supabase.co';  // from your project
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxucHZ2ZGVtaXpxcm9ya2psZnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NjY3NzEsImV4cCI6MjA2MzU0Mjc3MX0.L4YpCxRPNxU381dId7vMmGRcRU0JPfvH1G0GNyfFThg';           // from your project

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
