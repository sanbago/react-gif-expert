import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {  
    const [inputValue, setinputValue] = useState('Cr7');
    
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue) {
            // setCategories((categories) => [...categories, inputValue]);
            onNewCategory(inputValue);
        }

        setinputValue('');
    }
  
    return (
          
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
