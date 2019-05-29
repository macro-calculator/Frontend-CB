import { useState } from "react";

export const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = e => {
        setValue(e.target.value);
    }

    return { value, setValue, handleChanges }
}