"use server";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// The admin client uses the service key to bypass security rules
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
// The standard client is for logging in
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function loginAdmin(email: string, password: string) {
  // 1. Verify the email exists in your admin_users table
  const { data: adminUser, error: dbError } = await supabaseAdmin
    .from('admin_users')
    .select('*')
    .eq('email', email)
    .single();

  if (!adminUser || dbError) {
    return { success: false, error: "Email not authorized as admin." };
  }

  // 2. If they are in the table, try to log them in
  const { error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    return { success: false, error: "Invalid email or password." };
  }

  return { success: true };
}

// Add this to the bottom of your app/admin/actions.ts file

export async function logoutAdmin() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    return { success: false, error: error.message };
  }
  
  return { success: true };
}

// THIS IS YOUR DASHBOARD BYPASS:
// We will use this once to create your account without needing the dashboard
export async function forceCreateAdminUser(email: string, password: string) {
  const { error } = await supabaseAdmin.auth.admin.createUser({
    email: email,
    password: password,
    email_confirm: true // Auto-confirms so you don't need to check your email
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };



}