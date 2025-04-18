
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdminGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage

    // If no token or user is not an admin, redirect to login
    if (!token || userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);
};

export default useAdminGuard;
