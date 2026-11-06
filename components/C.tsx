import React, { useContext, useState } from 'react'
import { cntContext } from '../src/App'
import type { User } from '../src/App'

const C = () => {
  let { state, dispatch } = useContext(cntContext)!
  let [name, setName] = useState('')
  let [editUser, setEditUser] = useState<User | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Пользователи</h1>

        <div className="flex gap-2 mb-6">
          <input
            value={name}
            placeholder="Имя"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            onClick={() => {
              dispatch({ type: 'create', payload: { id: Date.now(), name: name } })
              setName('')
            }}
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {state.map((item: User) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-2 border border-gray-200 rounded-lg px-3 py-2"
            >
              {editUser?.id === item.id ? (
                <>
                  <input
                    value={editUser.name}
                    className="flex-1 border border-gray-300 rounded-lg px-2 py-1 outline-none focus:border-blue-500"
                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                  />
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
                    onClick={() => {
                      dispatch({ type: 'update', payload: editUser })
                      setEditUser(null)
                    }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 text-gray-800">{item.name}</span>
                  <button
                    className="text-blue-500 hover:text-blue-700 px-2 transition"
                    onClick={() => setEditUser(item)}
                  >
                    Edit
                  </button>
                </>
              )}

              <button
                className="text-red-500 hover:text-red-700 px-2 transition"
                onClick={() => dispatch({ type: 'delete', payload: item.id })}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default C