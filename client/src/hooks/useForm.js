// write your custom hook here to control your checkout form
import { useLocalstorage } from './useLocalStorage';

const useForm = (key, initialValue) => {

    const [values, setValues] = useLocalstorage(key, initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, handleChanges];
};

export default useForm