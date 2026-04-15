import pg from 'pg';

const client = new pg.Client({
  connectionString: 'postgres://postgres.qsahwnpiwhaxjpbtuegt:TwN3C1Jh.ej%40Sa%3A%5B%248jRpxCpe%2C%3BG6qaC@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=require&uselibpqcompat=true',
  ssl: true,
});

try {
  await client.connect();

  await client.query(`
    INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
    VALUES ('escape-assets', 'escape-assets', true, 5242880, ARRAY['image/jpeg','image/png','image/webp'])
    ON CONFLICT (id) DO NOTHING;
  `);
  console.log('Bucket created!');

  await client.query(`
    INSERT INTO storage.policies (name, bucket_id, operation, definition)
    VALUES
      ('allow_public_read',  'escape-assets', 'SELECT', 'true'),
      ('allow_all_insert',   'escape-assets', 'INSERT', 'true'),
      ('allow_all_update',   'escape-assets', 'UPDATE', 'true'),
      ('allow_all_delete',   'escape-assets', 'DELETE', 'true')
    ON CONFLICT DO NOTHING;
  `);
  console.log('Storage policies set!');
  console.log('Done — try saving in the admin panel again.');
} catch (err) {
  console.error('Error:', err.message);
} finally {
  await client.end();
}
