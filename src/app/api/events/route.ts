import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('events')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: 'No active event' }, { status: 404 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, venue_name, venue_sub, address, description, event_date, event_time, capacity, hero_image_url, ticket_url } = body;

  if (!title || !venue_name || !event_date || !hero_image_url) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  await supabaseAdmin.from('events').update({ is_active: false }).eq('is_active', true);

  const { data, error } = await supabaseAdmin
    .from('events')
    .insert({ title, venue_name, venue_sub, address, description, event_date, event_time, capacity, hero_image_url, ticket_url: ticket_url ?? '#', is_active: true })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...fields } = body;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from('events')
    .update(fields)
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}