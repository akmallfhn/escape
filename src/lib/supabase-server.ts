import { createClient } from '@supabase/supabase-js';

// Server-side client (no browser APIs)
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getHeroEventData(pageContext: string) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('hero_event_data')
    .select('*')
    .eq('page_context', pageContext)
    .single();
  return data;
}

export async function getEventDetailData() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('event_detail_data')
    .select('*')
    .order('id', { ascending: true })
    .limit(1)
    .single();
  return data;
}

export async function getMerchandiseItems() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('merchandise_items')
    .select('*')
    .eq('is_active', true)
    .order('order_index');
  return data ?? [];
}

export async function getPlaylistItems() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('playlist_items')
    .select('*')
    .eq('is_active', true)
    .order('order_index');
  return data ?? [];
}

export async function getPromotionalBannerData() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('promotional_banner_data')
    .select('*')
    .order('id')
    .limit(1)
    .single();
  return data;
}