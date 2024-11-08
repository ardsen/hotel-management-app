import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jaoqqqopomuyjrhpwfar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphb3FxcW9wb211eWpyaHB3ZmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3OTU5OTksImV4cCI6MjA0NTM3MTk5OX0.BHaXgZxM6EBzX8Ydu5YQM9cH1KDDuvY8Tbj3UuWbz2I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
