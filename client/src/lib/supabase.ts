import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dorqtterkztyqfnxwxoo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcnF0dGVya3p0eXFmbnh3eG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4Mzk0OTQsImV4cCI6MjA4ODQxNTQ5NH0.YrEkxK-FMDoMe5HQukheX3W4PG9tqS-zEliF1TSs1OQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
