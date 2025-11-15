import { supabase } from '../supabaseClient';

export default function Admin({ entries }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>🧘 Admin Dashboard</h1>

      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            User: {e.user_id} — Day {e.day_number} — Completed: {e.is_completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await supabase.from('habit_entries').select('*');
  return { props: { entries: data || [] } };
}
