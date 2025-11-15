import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Home() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchDays = async () => {
      let { data } = await supabase.from('habit_entries').select('*');
      setDays(data || []);
    };
    fetchDays();
  }, []);

  const toggleDay = async (dayNumber) => {
    await supabase
      .from('habit_entries')
      .update({ is_completed: true })
      .eq('day_number', dayNumber);

    setDays((prev) =>
      prev.map((d) =>
        d.day_number === dayNumber ? { ...d, is_completed: true } : d
      )
    );
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>90-Day Meditation Tracker</h1>

      <ul>
        {days.map((d) => (
          <li key={d.id}>
            Day {d.day_number} — Completed: {d.is_completed.toString()}
            {!d.is_completed && (
              <button onClick={() => toggleDay(d.day_number)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
