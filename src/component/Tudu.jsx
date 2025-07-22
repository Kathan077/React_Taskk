import React, { useState } from 'react'

const Tudu = () => {
    const [state, setState] = useState('')
    const [text, setText] = useState([])
    const [edit, setEdit] = useState(null)

    function addText(e) {
        setState(e.target.value) // ✅ fixed here
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (state.trim() === '') return // prevent empty submission

        if (edit !== null) {
            const updatedText = [...text]
            updatedText[edit] = state
            setText(updatedText)
            setEdit(null)
        } else {
            setText([...text, state])
        }
        setState('')
    }

    function handleDelete(i) {
        const newArr = [...text]
        newArr.splice(i, 1)
        setText(newArr)
    }

    function handleEdit(i) {
        setState(text[i])
        setEdit(i)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={state} onChange={addText} />
                <input type="submit" />
            </form>
            <ul>
                {text.map((el, i) => (
                    <li key={i}>
                        {el}
                        <button onClick={() => handleDelete(i)}>Del</button>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tudu
