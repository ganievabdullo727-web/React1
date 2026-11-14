import { useFormik } from 'formik'
import React, { useState } from 'react'

const validate = (e) => {
  let errors = {}
  if (!e.name) errors.name = 'Write your name please'
  else if (e.name.length < 3) errors.name = 'Min 3 characters'
  if (!e.age) errors.age = 'Write your age please'
  else if (e.age < 1) errors.age = 'Wrong age'
  return errors
}

const Home = () => {
  let [data, setData] = useState([{ id: 1, name: 'Abdullo', age: 16 }])
  let [search, setSearch] = useState('')
  let [open, setOpen] = useState(false)
  let [idx, setIdx] = useState(null)

  let handleAdd = (e, { resetForm }) => {
    setData([...data, { id: Date.now(), name: e.name, age: e.age }])
    resetForm()
  }

  let handleEdit = (e) => {
    setData(data.map((el) => (el.id == idx ? { ...el, name: e.name, age: e.age } : el)))
    setOpen(false)
  }

  let add = useFormik({
    initialValues: { name: '', age: '' },
    validate,
    onSubmit: handleAdd,
  })

  let edit = useFormik({
    initialValues: { name: '', age: '' },
    validate,
    onSubmit: handleEdit,
  })

  let handleDelete = (id) => {
    setData(data.filter((e) => e.id != id))
  }

  let openEdit = (e) => {
    setIdx(e.id)
    edit.setValues({ name: e.name, age: e.age })
    edit.setTouched({}, false)
    setOpen(true)
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

      <form onSubmit={add.handleSubmit} className="flex flex-col gap-2">
        <input className={input} placeholder="Name..." {...add.getFieldProps('name')} />
        {add.touched.name && add.errors.name && (
          <p className="text-red-500 text-sm">{add.errors.name}</p>
        )}

        <input className={input} type="number" placeholder="Age..." {...add.getFieldProps('age')} />
        {add.touched.age && add.errors.age && (
          <p className="text-red-500 text-sm">{add.errors.age}</p>
        )}

        <button type="submit" className={btn}>Add</button>
      </form>

      {filteredData.map((e) => (
        <div key={e.id} className="border rounded p-3 flex flex-col gap-2">
          <div>
            <h2 className="font-semibold">{e.name}</h2>
            <p className="text-sm text-gray-500">{e.age}</p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => openEdit(e)}>Edit</button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>

          {open && idx == e.id ? (
            <form onSubmit={edit.handleSubmit} className="flex flex-col gap-2">
              <input className={input} {...edit.getFieldProps('name')} />
              {edit.touched.name && edit.errors.name && (
                <p className="text-red-500 text-sm">{edit.errors.name}</p>
              )}

              <input className={input} type="number" {...edit.getFieldProps('age')} />
              {edit.touched.age && edit.errors.age && (
                <p className="text-red-500 text-sm">{edit.errors.age}</p>
              )}

              <div className="flex gap-2">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setOpen(false)}>Cancel</button>
              </div>
            </form>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Home