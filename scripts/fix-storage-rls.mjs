import pg from 'pg';

const client = new pg.Client({
  connectionString: 'postgres://postgres.qsahwnpiwhaxjpbtuegt:TwN3C1Jh.ej%40Sa%3A%5B%248jRpxCpe%2C%3BG6qaC@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=require&uselibpqcompat=true',
  ssl: true,
});

try {
  await client.connect();
  await client.query(`ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;`);
  console.log('Storage RLS disabled — uploads will now work.');
} catch (err) {
  console.error('Error:', err.message);
} finally {
  await client.end();
}
