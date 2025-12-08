import { useState } from 'react'

export default function IntakeForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    userType: 'Homeowner',
    projectType: '',
    callLength: '30-60 min'
  })
  const [status, setStatus] = useState('')

  function update(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setStatus('submitted')
      alert('Thanks — we received your intake and will call soon (placeholder).')
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert('Submission failed (placeholder).')
    }
  }

  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Project Intake Questionnaire</h2>

      <label className="block mb-2">Full Name</label>
      <input name="name" value={form.name} onChange={update} className="w-full mb-4 p-2 border rounded" required />

      <label className="block mb-2">Phone Number</label>
      <input name="phone" value={form.phone} onChange={update} className="w-full mb-4 p-2 border rounded" required />

      <label className="block mb-2">Homeowner or Contractor?</label>
      <select name="userType" value={form.userType} onChange={update} className="w-full mb-4 p-2 border rounded">
        <option>Homeowner</option>
        <option>Contractor</option>
      </select>

      <label className="block mb-2">Project Type</label>
      <input name="projectType" value={form.projectType} onChange={update} className="w-full mb-4 p-2 border rounded" />

      <label className="block mb-2">Expected Call Length</label>
      <select name="callLength" value={form.callLength} onChange={update} className="w-full mb-4 p-2 border rounded">
        <option>15-30 min</option>
        <option>30-60 min</option>
        <option>60+ min</option>
      </select>

      <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>

      <p className="text-sm text-gray-500 mt-3">Status: {status}</p>
    </form>
  )
}
