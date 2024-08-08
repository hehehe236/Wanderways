import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store.tsx';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
