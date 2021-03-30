import {useState} from "react";

export const useForm = ( initialState = {} ) => {

    const [formValue, setFormValue] = useState(initialState)

    const reset = () => {
      setFormValue(initialState);
    }


    const handleInputChange = ({ target }) => {
        setFormValue({
          ...formValue,
          [target.name]: target.value,
        });
      };

      return [formValue, handleInputChange, reset];

}
