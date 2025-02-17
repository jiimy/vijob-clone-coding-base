// This check can be removed
// it is just for tutorial purposes

import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./key";

export const hasEnvVars = SUPABASE_URL && SUPABASE_ANON_KEY;
