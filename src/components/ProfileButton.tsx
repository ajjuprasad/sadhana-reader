import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileButton() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;

  return (
    <button
      onClick={() => navigate('/profile')}
      className="p-1.5 hover:opacity-70 transition-opacity"
      aria-label="Profile"
    >
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          alt=""
          className="w-7 h-7 rounded-full"
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )}
    </button>
  );
}
