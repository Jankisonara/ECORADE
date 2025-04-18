import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdminGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.isAdmin) {
      navigate('/login');
    }
  }, [navigate]);
};

export default useAdminGuard;
