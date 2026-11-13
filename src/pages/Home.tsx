import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  let [data, setData] = useState([{ id: 1, name: 'Abdullo', age: 16 }])
  let [search, setSearch] = useState('')
  let [open, setOpen] = useState(false)
  let [idx, setIdx] = useState(null)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', age: '' } })

  let {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    formState: { errors: errorsEdit },
  } = useForm()

  let handleAdd = (e) => {
    setData([...data, { id: Date.now(), name: e.name, age: e.age }])
    reset()
  }

  let handleDelete = (id) => {
    setData(data.filter((e) => e.id != id))
  }

  let openEdit = (e) => {
    setIdx(e.id)
    resetEdit({ name: e.name, age: e.age })
    setOpen(true)
  }

  let handleEdit = (e) => {
    setData(data.map((el) => (el.id == idx ? { ...el, name: e.name, age: e.age } : el)))
    setOpen(false)
  }

  let filteredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase().trim())
  )

  const input = 'border rounded p-2 w-full'
  const btn = 'border rounded px-3 py-1'

  return (
    <div className="max-w-sm mx-auto p-6 flex flex-col gap-4">
      <input
        className={input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleSubmit(handleAdd)} className="flex flex-col gap-2">
        <input
          className={input}
          placeholder="Name..."
          {...register('name', {
            required: 'Write your name please',
            minLength: { value: 3, message: 'Min 3 characters' },
          })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          className={input}
          type="number"
          placeholder="Age..."
          {...register('age', {
            required: 'Write your age please',
            min: { value: 1, message: 'Wrong age' },
          })}
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}

        <button className={btn}>Add</button>
      </form>

      {filteredData.map((e) => (
        <div key={e.id} className="border rounded p-3 flex flex-col gap-2">
          <div>
            <h2 className="font-semibold">{e.name}</h2>
            <p className="text-sm text-gray-500">{e.age}</p>
          </div>

          <div className="flex gap-2">
            <button className={btn} onClick={() => openEdit(e)}>Edit</button>
            <button className={btn} onClick={() => handleDelete(e.id)}>Delete</button>
          </div>

          {open && idx == e.id ? (
            <form onSubmit={handleSubmitEdit(handleEdit)} className="flex flex-col gap-2">
              <input className={input} {...registerEdit('name', { required: 'Write your name please' })} />
              {errorsEdit.name && <p className="text-red-500 text-sm">{errorsEdit.name.message}</p>}

              <input className={input} type="number" {...registerEdit('age', { required: 'Write your age please' })} />
              {errorsEdit.age && <p className="text-red-500 text-sm">{errorsEdit.age.message}</p>}

              <div className="flex gap-2">
                <button className={btn}>Save</button>
                <button type="button" className={btn} onClick={() => setOpen(false)}>Cancel</button>
              </div>
            </form>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default App