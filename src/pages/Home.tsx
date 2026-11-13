import { useState } from 'react'
import { useForm } from 'react-hook-form'

const empty = { id: '', name: '', email: '' }

function getUsers() {
    const users = localStorage.getItem('user')
    return users ? JSON.parse(users) : []
}

function App() {
    const [list, setList] = useState(getUsers)
    const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid }
    } = useForm({ mode: 'onBlur', defaultValues: empty })

    const isEdit = !!watch('id')

    const sync = (next) => {
        localStorage.setItem('user', JSON.stringify(next))
        setList(next)
    }

    // Add / Edit
    const onSubmit = (data) => {
        const next = data.id
            ? list.map((u) => (u.id === data.id ? data : u))
            : [...list, { ...data, id: String(Date.now()) }]

        sync(next)
        setSuccess(true)
        setTimeout(() => setSuccess(false), 2000)
        reset(empty)
    }

    // Delete
    const remove = (id) => sync(list.filter((u) => u.id !== id))

    return (
        <div className="p-10 flex flex-col items-start gap-10">
            <h1 className="font-semibold text-2xl">React Hook Form CRUD</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-80">
                <input type="hidden" {...register('id')} />

                <input
                    {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 3, message: 'Minimum 3 characters' }
                    })}
                    placeholder="Name"
                    className="border p-2 rounded"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }
                    })}
                    placeholder="Email"
                    className="border p-2 rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <button
                    disabled={!isValid}
                    type="submit"
                    className={`p-2 rounded text-white ${
                        isValid ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    {isEdit ? 'Save' : 'Add'}
                </button>
            </form>

            <ul className="flex flex-col gap-2 w-80">
                {list.map((u) => (
                    <li key={u.id} className="flex items-center justify-between border p-2 rounded">
                        <span>{u.name} — {u.email}</span>
                        <div className="flex gap-2">
                            <button onClick={() => reset(u)} className="text-blue-600">Edit</button>
                            <button onClick={() => remove(u.id)} className="text-red-500">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div
                className={`bg-green-600 text-white p-3 rounded transition-all duration-500 ${
                    success ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
                }`}
            >
                ✓ Saved successfully!
            </div>
        </div>
    )
}

export default App