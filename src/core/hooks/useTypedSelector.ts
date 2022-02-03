import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { rootState } from '../../domain/reducers';

const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
export default useTypedSelector;
