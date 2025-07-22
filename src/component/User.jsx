import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Tudu = () => {
    const [state, setState] = useState({ title: '', desc: '', email: '', age: '' })
    const [text, setText] = useState([])
    const [edit, setEdit] = useState(null)
    const [showForm, setShowForm] = useState(false)

    function addText(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newItem = { ...state, like: false }  
        if (edit !== null) {
            const updatedText = [...text]
            updatedText[edit] = newItem
            setText(updatedText)
            setEdit(null)
        } else {
            setText([...text, newItem])
        }
        setState({ title: '', desc: '', email: '', age: '' })
        setShowForm(false)
    }

    function handleDelete(i) {
        const newArr = [...text]
        newArr.splice(i, 1)
        setText(newArr)
    }

    function handleedt(i) {
        const { title, desc, email, age } = text[i]
        setState({ title, desc, email, age }) // don't load like into form
        setEdit(i)
        setShowForm(true)
    }

    function handleLike(i) {
        const updated = [...text]
        updated[i].like = !updated[i].like
        setText(updated)
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Todo Form (With Bootstrap & Like)</h2>

            <div className="text-center mb-3">
                <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Hide Form' : edit !== null ? 'Edit Item' : 'Add Item'}
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={state.title}
                        onChange={addText}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        name="desc"
                        placeholder="Description"
                        value={state.desc}
                        onChange={addText}
                        className="form-control mb-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={addText}
                        className="form-control mb-2"
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={state.age}
                        onChange={addText}
                        className="form-control mb-3"
                    />
                    <button type="submit" className="btn btn-success w-100">
                        {edit !== null ? 'Update' : 'Add'}
                    </button>
                </form>
            )}

            <div>
                {text.map((el, i) => (
                    <div className="card mb-3 shadow-sm" key={i}>
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">{el.desc}</p>
                            <p className="card-text"><strong>Email:</strong> {el.email}</p>
                            <p className="card-text"><strong>Age:</strong> {el.age}</p>

                            <button onClick={() => handleDelete(i)} className="btn btn-danger me-2">Delete</button>
                            <button onClick={() => handleedt(i)} className="btn btn-warning me-2">Edit</button>
                            <button
                                onClick={() => handleLike(i)}
                                className={`btn ${el.like ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                            >
                                {el.like ? '❤️ Liked' : '🤍 Like'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tudu
